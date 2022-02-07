import { areDatesEqual } from './areDatesEqual'

describe('areDatesEqual', () => {
  it.each([
    [undefined, undefined],
    [undefined, null],
    [null, undefined],
    [null, null],
    [new Date(NaN), new Date(NaN)],
    [new Date('2022-01-01'), new Date('2022-01-01')],
  ])('returns true for values `%s` and `%s`', (dateLeft, dateRight) => {
    expect(areDatesEqual(dateLeft, dateRight)).toBeTruthy()
  })

  it.each([
    [new Date(NaN), null],
    [new Date('2022-01-01'), null],
    [new Date('2022-01-01'), new Date(NaN)],
    [new Date('2022-01-01'), new Date('2022-01-02')],
  ])('returns false for values `%s` and `%s`', (dateLeft, dateRight) => {
    expect(areDatesEqual(dateLeft, dateRight)).toBeFalsy()
    expect(areDatesEqual(dateRight, dateLeft)).toBeFalsy()
  })
})
