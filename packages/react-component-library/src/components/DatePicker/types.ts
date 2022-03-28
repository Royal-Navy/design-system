export interface DatePickerState {
  startDate: Date | null
  endDate: Date | null
  inputValue: string
  datePickerFormat: string
  hasError: boolean
}

export const DATEPICKER_ACTION = {
  RESET: 'reset',
  UPDATE: 'update',
  REFRESH_HAS_ERROR: 'refreshHasError',
  REFRESH_INPUT_VALUE: 'refreshInputValue',
} as const

interface ResetAction {
  type: typeof DATEPICKER_ACTION.RESET
  data: Omit<DatePickerState, 'hasError' | 'inputValue'>
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

export type DatePickerAction =
  | ResetAction
  | UpdateAction
  | RefreshHasErrorAction
  | RefreshInputValueAction
