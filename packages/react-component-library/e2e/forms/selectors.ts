export default {
  input: {
    email: '[data-testid="form-example-TextInput-email"]',
    password: '[data-testid="form-example-TextInput-password"]',
    description: '[data-testid="form-example-TextArea-description"]',
    checkbox: '[data-testid="checkbox"]',
    radio: '[data-testid="radio"]',
    switch: '[data-testid="switch"]',
    switchOption: '[data-testid="switch-option"]',
    numberInput: '[data-testid="number-input"]',
    numberInputIncrease: '[data-testid="number-input-increase"]',
    datePicker: '[data-testid="datepicker-outer-wrapper"]',
    datePickerInput: '[data-testid="datepicker-input"]',
    select: '[data-testid="select"]:has-text("Example select") input',
    autocomplete:
      '[data-testid="select"]:has-text("Example autocomplete") input',
    rangeSlider: '[data-testid="rangeslider"]',
    rangeSliderRail: '[data-testid="rangeslider-rail"]',
  },
  submit: '[data-testid="form-example-submit"]',
  values: '[data-testid="form-example-values"]',
} as const
