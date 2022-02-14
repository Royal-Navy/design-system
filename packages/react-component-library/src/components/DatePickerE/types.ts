export interface DatePickerEState {
  startDate: Date | null
  endDate: Date | null
  inputValue: string
  datePickerFormat: string
  hasError: boolean
}

export const DATEPICKER_E_ACTION = {
  RESET: 'reset',
  UPDATE: 'update',
  REFRESH_HAS_ERROR: 'refreshHasError',
  REFRESH_INPUT_VALUE: 'refreshInputValue',
} as const

interface ResetAction {
  type: typeof DATEPICKER_E_ACTION.RESET
  data: Omit<DatePickerEState, 'hasError' | 'inputValue'>
}

interface UpdateAction {
  type: typeof DATEPICKER_E_ACTION.UPDATE
  data: Partial<DatePickerEState>
}

interface RefreshHasErrorAction {
  type: typeof DATEPICKER_E_ACTION.REFRESH_HAS_ERROR
  data?: never
}

interface RefreshInputValueAction {
  type: typeof DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE
  data?: never
}

export type DatePickerEAction =
  | ResetAction
  | UpdateAction
  | RefreshHasErrorAction
  | RefreshInputValueAction
