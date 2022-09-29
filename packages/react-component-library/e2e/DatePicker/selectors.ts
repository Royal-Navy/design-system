export default {
  button: '[data-testid="datepicker-input-button"]',
  day: {
    inside: '.DayPicker-Day:not(.DayPicker-Day--outside)',
  },
  floatingBox: '[data-testid="floating-box"]',
  input: '[data-testid="datepicker-input"]',
  outerWrapper: '[data-testid="datepicker-outer-wrapper"]',
} as const
