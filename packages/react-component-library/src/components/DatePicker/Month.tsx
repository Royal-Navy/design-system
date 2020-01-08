import React from 'react'
import { useMonth, FirstDayOfWeek } from '@datepicker-react/hooks'
import { Day } from './Day'

export interface MonthProps extends ComponentWithClass {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
}

const dayFormat = {
  Mo: 'Mon',
  Tu: 'Tue',
  We: 'Wed',
  Th: 'Thu',
  Fr: 'Fri',
  Sa: 'Sat',
  Su: 'Sun',
}

function formatDayLabel(dayLabel: string): string {
  return dayFormat[dayLabel] || dayLabel
}

function getKey(prefix: string, id: string): string {
  return `${prefix}_${id}`
}

export const Month: React.FC<MonthProps> = ({
  year,
  month,
  firstDayOfWeek,
}) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  })

  return (
    <div>
      <div className="rn-date-picker__header">
        <div
          className="rn-date-picker__month-label"
          data-testid="datepicker-month-label"
        >
          {monthLabel}
        </div>
      </div>
      <div className="rn-date-picker__day-label-grid">
        {weekdayLabels.map(dayLabel => (
          <div className="rn-date-picker__day-label" key={dayLabel}>
            {formatDayLabel(dayLabel)}
          </div>
        ))}
      </div>
      <div className="rn-date-picker__day-grid">
        {days.map((day, index) => {
          if (typeof day === 'object') {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={formatDayLabel(day.dayLabel)}
              />
            )
          }

          return <div key={getKey('blank-day', index.toString())} />
        })}
      </div>
    </div>
  )
}

Month.displayName = 'Month'
