import { getMonths, getWeeks } from '../reducer'
import { TimelineState, TimelineMonth, TimelineWeek } from '../types'

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
    const range = 3

    beforeEach(() => {
      dates = getMonths(
        new Date(2020, 3, 1, 0, 0, 0),
        {
          options: {
            range
          }
        } as TimelineState
      )
    })

    it('returns the correct number of months', () => {
      expect(dates.months.length).toBe(range)
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
    const range = 3

    beforeEach(() => {
      weeks = getWeeks(
        new Date(2020, 3, 1, 0, 0, 0),
        {
          options: {
            range
          }
        } as TimelineState
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
})
