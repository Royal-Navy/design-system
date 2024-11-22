import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import { DatePickerState, DATEPICKER_ACTION, DatePickerAction } from './types'
import {
  areDatesEqual,
  isDateValid,
  formatDatesForInput,
  replaceInvalidDate,
} from './utils'
import { CALENDAR_TABLE_VARIANT } from './constants'

interface DatePickerContextType {
  state: DatePickerState
  dispatch: React.Dispatch<DatePickerAction>
}

const DatePickerContext = createContext<DatePickerContextType | undefined>(
  undefined
)

interface DatePickerProviderProps {
  children: React.ReactNode
  startDate: Date | null | undefined
  endDate: Date | null | undefined
  initialStartDate: Date | null
  initialEndDate: Date | null
  datePickerFormat: string
  isRange: boolean
  initialMonth: Date | null | undefined
  initialIsOpen?: boolean
}

function init({
  startDate,
  endDate,
  currentMonth,
  datePickerFormat,
  isOpen = false,
}: Omit<DatePickerState, 'hasError' | 'inputValue' | 'calendarTableVariant'>) {
  return {
    startDate,
    endDate,
    currentMonth,
    datePickerFormat,
    hasError: false,
    inputValue: formatDatesForInput(startDate, endDate, datePickerFormat),
    isOpen,
    calendarTableVariant: CALENDAR_TABLE_VARIANT.HIDE,
  }
}

function reducer(
  state: DatePickerState,
  action: DatePickerAction
): DatePickerState {
  switch (action.type) {
    case DATEPICKER_ACTION.RESET:
      return init({ ...action.data, isOpen: state.isOpen })
    case DATEPICKER_ACTION.UPDATE:
      return { ...state, ...action.data }
    case DATEPICKER_ACTION.REFRESH_HAS_ERROR:
      return {
        ...state,
        hasError: Boolean(state.startDate && !isDateValid(state.startDate)),
      }
    case DATEPICKER_ACTION.REFRESH_INPUT_VALUE:
      if (state.startDate && !isDateValid(state.startDate)) {
        return state
      }

      return {
        ...state,
        inputValue: formatDatesForInput(
          state.startDate,
          state.endDate,
          state.datePickerFormat
        ),
      }
    default:
      throw new Error('Unknown reducer action type')
  }
}

function shouldReset(
  state: DatePickerState,
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  datePickerFormat: string,
  isRange: boolean
): boolean {
  if (startDate === undefined && endDate === undefined) {
    return false
  }

  return (
    !areDatesEqual(state.startDate, startDate) ||
    (isRange && !areDatesEqual(state.endDate, endDate)) ||
    datePickerFormat !== state.datePickerFormat
  )
}

const getEffectiveDate = (
  date: Date | null | undefined,
  initialDate: Date | null
) => (date === undefined ? initialDate : date)

export function DatePickerProvider({
  children,
  startDate,
  endDate,
  initialStartDate,
  initialEndDate,
  datePickerFormat,
  isRange,
  initialMonth,
  initialIsOpen = false,
}: DatePickerProviderProps) {
  const effectiveStartDate = getEffectiveDate(startDate, initialStartDate)
  const effectiveEndDate = getEffectiveDate(endDate, initialEndDate)

  const currentMonth = useMemo(
    () => replaceInvalidDate(effectiveStartDate) || initialMonth || new Date(),
    [effectiveStartDate, initialMonth]
  )

  const [state, dispatch] = useReducer(
    reducer,
    {
      startDate: effectiveStartDate,
      endDate: effectiveEndDate,
      currentMonth,
      datePickerFormat,
      isOpen: initialIsOpen,
    },
    init
  )

  useEffect(() => {
    if (shouldReset(state, startDate, endDate, datePickerFormat, isRange)) {
      dispatch({
        type: DATEPICKER_ACTION.RESET,
        data: {
          startDate: startDate ?? null,
          endDate: endDate ?? null,
          currentMonth,
          datePickerFormat,
          calendarTableVariant: CALENDAR_TABLE_VARIANT.HIDE,
        },
      })
    }
  }, [
    datePickerFormat,
    endDate,
    isRange,
    startDate,
    state,
    currentMonth,
    initialIsOpen,
  ])

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  )

  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  )
}

export function useDatePickerContext() {
  const context = useContext(DatePickerContext)

  if (context === undefined) {
    throw new Error(
      'useDatePickerContext must be used within a DatePickerProvider'
    )
  }

  return context
}
