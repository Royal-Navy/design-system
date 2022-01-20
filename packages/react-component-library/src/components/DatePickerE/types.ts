export interface DatePickerEState {
  startDate?: Date
  endDate?: Date
  inputValue: string
  datePickerFormat: string
}

export const DATEPICKER_E_ACTION = {
  RESET: 'reset',
  UPDATE: 'update',
  REFRESH_INPUT_VALUE: 'refreshInputValue',
} as const

interface ResetAction {
  type: typeof DATEPICKER_E_ACTION.RESET
  data: Omit<DatePickerEState, 'inputValue'>
}

interface UpdateAction {
  type: typeof DATEPICKER_E_ACTION.UPDATE
  data: Partial<DatePickerEState>
}

interface RefreshInputValueAction {
  type: typeof DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE
  data?: never
}

export type DatePickerEAction =
  | ResetAction
  | UpdateAction
  | RefreshInputValueAction
