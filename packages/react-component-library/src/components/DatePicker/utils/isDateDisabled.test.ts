import { isDateDisabled } from './isDateDisabled'

describe('isDateDisabled', () => {
  const date = new Date(2023, 5, 25) // June 25, 2023
  const testCases = [
    {
      description: 'the date is an exact match',
      disabledDays: new Date(2023, 5, 25),
      expectedResult: true,
    },
    {
      description: 'the date is not an exact match',
      disabledDays: new Date(2023, 5, 26),
      expectedResult: false,
    },
    {
      description: 'the date is after a certain date',
      disabledDays: { after: new Date(2023, 5, 24) },
      expectedResult: true,
    },
    {
      description: 'the date is not after a certain date',
      disabledDays: { after: new Date(2023, 5, 25) },
      expectedResult: false,
    },
    {
      description: 'the date is before a certain date',
      disabledDays: { before: new Date(2023, 5, 26) },
      expectedResult: true,
    },
    {
      description: 'the date is not before a certain date',
      disabledDays: { before: new Date(2023, 5, 25) },
      expectedResult: false,
    },
    {
      description: 'the date is within a range',
      disabledDays: { from: new Date(2023, 5, 24), to: new Date(2023, 5, 26) },
      expectedResult: true,
    },
    {
      description: 'the date is not within a range',
      disabledDays: { from: new Date(2023, 5, 26), to: new Date(2023, 5, 27) },
      expectedResult: false,
    },
    {
      description: 'the date is a specific day of the week',
      disabledDays: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
      expectedResult: true,
    },
    {
      description: 'the date is not a specific day of the week',
      disabledDays: { daysOfWeek: [1, 2, 3, 4, 5, 6] },
      expectedResult: false,
    },
    {
      description: 'any conditions in an array are met',
      disabledDays: [
        { before: new Date(2023, 5, 24) },
        { after: new Date(2023, 5, 26) },
        new Date(2023, 5, 25),
      ],
      expectedResult: true,
    },
    {
      description: 'none of the conditions in an array are met',
      disabledDays: [
        { before: new Date(2023, 5, 24) },
        { after: new Date(2023, 5, 26) },
        new Date(2023, 5, 27),
      ],
      expectedResult: false,
    },
  ]

  it.each(testCases)(
    'should return $expectedResult if $description',
    ({ disabledDays, expectedResult }) => {
      expect(isDateDisabled(date, disabledDays)).toBe(expectedResult)
    }
  )
})
