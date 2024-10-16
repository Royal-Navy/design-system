import { FormValues } from './types'

export const EMPTY_FORM_VALUES: FormValues = {
  email: '',
  password: '',
  description: '',
  exampleCheckbox: [],
  exampleRadio: '',
  exampleSwitch: '',
  exampleNumberInput: null,
  exampleDatePicker: null,
  exampleSelect: null,
  exampleAutocomplete: null,
  exampleRangeSlider: [20],
  exampleToggle: false,
}

export const PREPOPULATED_FORM_VALUES: FormValues = {
  email: 'example@email.test',
  password: 'example-password',
  description: 'Example description',
  exampleCheckbox: ['Option 2'],
  exampleRadio: 'Option 2',
  exampleSwitch: '2',
  exampleNumberInput: 156,
  exampleDatePicker: new Date(2022, 1, 10),
  exampleSelect: 'three',
  exampleAutocomplete: 'two',
  exampleRangeSlider: [4],
  exampleToggle: false,
}
