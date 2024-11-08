import { CalendarTableVariant } from './constants'

export interface DatePickerState {
  startDate: Date | null
  endDate: Date | null
  currentMonth: Date
  datePickerFormat: string
  hasError: boolean
  inputValue: string
  isOpen: boolean
  calendarTableVariant: CalendarTableVariant
}

export const DATEPICKER_ACTION = {
  RESET: 'RESET',
  UPDATE: 'UPDATE',
  REFRESH_HAS_ERROR: 'REFRESH_HAS_ERROR',
  REFRESH_INPUT_VALUE: 'REFRESH_INPUT_VALUE',
  TOGGLE_OPEN: 'TOGGLE_OPEN',
} as const

interface ResetAction {
  type: typeof DATEPICKER_ACTION.RESET
  data: Omit<DatePickerState, 'hasError' | 'inputValue' | 'isOpen'>
}

interface UpdateAction {
  type: typeof DATEPICKER_ACTION.UPDATE
  data: Partial<DatePickerState>
}

interface RefreshHasErrorAction {
  type: typeof DATEPICKER_ACTION.REFRESH_HAS_ERROR
  data?: never
}

interface RefreshInputValueAction {
  type: typeof DATEPICKER_ACTION.REFRESH_INPUT_VALUE
  data?: never
}

interface ToggleOpenAction {
  type: typeof DATEPICKER_ACTION.TOGGLE_OPEN
  data?: never
}

export type DatePickerAction =
  | ResetAction
  | UpdateAction
  | RefreshHasErrorAction
  | RefreshInputValueAction
  | ToggleOpenAction
