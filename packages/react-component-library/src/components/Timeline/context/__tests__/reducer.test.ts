import { getMonths, getWeeks, getDays } from '../reducer'
import { TimelineState, TimelineMonth, TimelineWeek, TimelineDay } from '../types'

describe('TimelineContext reducer', () => {
  describe('Timezones', () => {
    it('should always be UTC', () => {
      expect(new Date().getTimezoneOffset()).toBe(0)
    })
  })

  describe('getMonths', () => {
    let dates: {
      months: TimelineMonth[]
    }
    const rangeInMonths = 3

    beforeEach(() => {
      dates = getMonths(
        new Date(2020, 3, 1, 0, 0, 0),
        rangeInMonths,
      )
    })

    it('returns the correct number of months', () => {
      expect(dates.months.length).toBe(rangeInMonths)
    })

    it('returns the correct month start dates', () => {
      expect(dates.months[0].startDate)
        .toEqual(new Date('2020-04-01T00:00:00.000Z'))

      expect(dates.months[1].startDate)
        .toEqual(new Date('2020-05-01T00:00:00.000Z'))

      expect(dates.months[2].startDate)
        .toEqual(new Date('2020-06-01T00:00:00.000Z'))
    })
  })

  describe('getWeeks', () => {
    let weeks: TimelineWeek[]
    const rangeInMonths = 3

    beforeEach(() => {
      weeks = getWeeks(
        new Date(2020, 3, 1, 0, 0, 0),
        rangeInMonths,
      )
    })

    it('returns the correct number of weeks', () => {
      expect(weeks.length).toBe(13)
    })

    it('returns the correct week start dates', () => {
      expect(weeks[0].startDate)
        .toEqual(new Date('2020-03-30T00:00:00.000Z'))

      expect(weeks[1].startDate)
        .toEqual(new Date('2020-04-06T00:00:00.000Z'))

      expect(weeks[2].startDate)
        .toEqual(new Date('2020-04-13T00:00:00.000Z'))

      expect(weeks[3].startDate)
        .toEqual(new Date('2020-04-20T00:00:00.000Z'))

      expect(weeks[4].startDate)
        .toEqual(new Date('2020-04-27T00:00:00.000Z'))
    })
  })

  describe('getDays', () => {
    let days: TimelineDay[]
    const rangeInMonths = 1

    beforeEach(() => {
      days = getDays(
        new Date(2020, 3, 1, 0, 0, 0),
        rangeInMonths,
      )
    })

    it('returns the correct number of days', () => {
      expect(days).toHaveLength(30)
    })

    it('returns the correct sequence of days', () => {
      const expected = [
        {"date": new Date("2020-04-01T00:00:00.000Z"), "dayIndex": 0},
        {"date": new Date("2020-04-02T00:00:00.000Z"), "dayIndex": 1},
        {"date": new Date("2020-04-03T00:00:00.000Z"), "dayIndex": 2},
        {"date": new Date("2020-04-04T00:00:00.000Z"), "dayIndex": 3},
        {"date": new Date("2020-04-05T00:00:00.000Z"), "dayIndex": 4},
        {"date": new Date("2020-04-06T00:00:00.000Z"), "dayIndex": 5},
        {"date": new Date("2020-04-07T00:00:00.000Z"), "dayIndex": 6},
        {"date": new Date("2020-04-08T00:00:00.000Z"), "dayIndex": 7},
        {"date": new Date("2020-04-09T00:00:00.000Z"), "dayIndex": 8},
        {"date": new Date("2020-04-10T00:00:00.000Z"), "dayIndex": 9},
        {"date": new Date("2020-04-11T00:00:00.000Z"), "dayIndex": 10},
        {"date": new Date("2020-04-12T00:00:00.000Z"), "dayIndex": 11},
        {"date": new Date("2020-04-13T00:00:00.000Z"), "dayIndex": 12},
        {"date": new Date("2020-04-14T00:00:00.000Z"), "dayIndex": 13},
        {"date": new Date("2020-04-15T00:00:00.000Z"), "dayIndex": 14},
        {"date": new Date("2020-04-16T00:00:00.000Z"), "dayIndex": 15},
        {"date": new Date("2020-04-17T00:00:00.000Z"), "dayIndex": 16},
        {"date": new Date("2020-04-18T00:00:00.000Z"), "dayIndex": 17},
        {"date": new Date("2020-04-19T00:00:00.000Z"), "dayIndex": 18},
        {"date": new Date("2020-04-20T00:00:00.000Z"), "dayIndex": 19},
        {"date": new Date("2020-04-21T00:00:00.000Z"), "dayIndex": 20},
        {"date": new Date("2020-04-22T00:00:00.000Z"), "dayIndex": 21},
        {"date": new Date("2020-04-23T00:00:00.000Z"), "dayIndex": 22},
        {"date": new Date("2020-04-24T00:00:00.000Z"), "dayIndex": 23},
        {"date": new Date("2020-04-25T00:00:00.000Z"), "dayIndex": 24},
        {"date": new Date("2020-04-26T00:00:00.000Z"), "dayIndex": 25},
        {"date": new Date("2020-04-27T00:00:00.000Z"), "dayIndex": 26},
        {"date": new Date("2020-04-28T00:00:00.000Z"), "dayIndex": 27},
        {"date": new Date("2020-04-29T00:00:00.000Z"), "dayIndex": 28},
        {"date": new Date("2020-04-30T00:00:00.000Z"), "dayIndex": 29}
      ]

      expect(days).toEqual(expected)
    })
  })
})
