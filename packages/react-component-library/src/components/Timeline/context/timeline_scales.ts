import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInDays,
  differenceInHours,
} from 'date-fns'
import { find } from 'lodash'

import { BlockSizeType } from '../TimelineHours'
import { TimelineOptions, TimelineScaleOption } from './types'
import { TIMELINE_BLOCK_SIZE } from '../constants'

const DEFAULT_INTERVAL_SIZE = 1
const HOURS_IN_DAY = 24

function getEarliest(endDate: Date, to: Date) {
  return endDate && endDate < to ? endDate : to
}

type ScaleConfigOptionType = {
  calculateDate: (date: Date, intervalSize: number) => Date
  hoursBlockSize?: BlockSizeType
  intervalSize: number
  isDefault?: boolean
  scale?: number
}
type ScaleConfigType = { [key: string]: ScaleConfigOptionType }

function getScaleConfig(monthIntervalSize: number): ScaleConfigType {
  return {
    hour: {
      calculateDate: addWeeks,
      hoursBlockSize: TIMELINE_BLOCK_SIZE.SINGLE_HOUR,
      intervalSize: DEFAULT_INTERVAL_SIZE,
      scale: 8,
    },
    quarter_day: {
      calculateDate: addWeeks,
      intervalSize: DEFAULT_INTERVAL_SIZE,
      scale: 4,
    },
    day: {
      calculateDate: addWeeks,
      intervalSize: DEFAULT_INTERVAL_SIZE,
      scale: 2,
    },
    week: {
      calculateDate: addWeeks,
      intervalSize: DEFAULT_INTERVAL_SIZE,
    },
    month: {
      calculateDate: addMonths,
      intervalSize: monthIntervalSize || DEFAULT_INTERVAL_SIZE,
      isDefault: true,
    },
    year: {
      calculateDate: addYears,
      intervalSize: DEFAULT_INTERVAL_SIZE,
    },
    five_year: {
      calculateDate: addYears,
      intervalSize: 5,
    },
  }
}

function mapScaleOption(
  startDate: Date,
  maxWidth: number,
  hoursBlockSize: BlockSizeType,
  endDate: Date
) {
  return ({
    calculateDate,
    intervalSize,
    scale,
    hoursBlockSize: configHoursBlockSize,
    ...rest
  }: ScaleConfigOptionType): TimelineScaleOption => {
    const to = addDays(calculateDate(startDate, intervalSize), -1)
    const numberOfHours = differenceInHours(to, startDate)
    const optionHoursBlockSize =
      configHoursBlockSize || hoursBlockSize || TIMELINE_BLOCK_SIZE.QUARTER_DAY

    const hourWidth = (maxWidth / numberOfHours) * (scale || 1)

    return {
      calculateDate,
      intervalSize,
      from: startDate,
      hoursBlockSize: optionHoursBlockSize,
      to: getEarliest(endDate, to),
      widths: {
        hour: hourWidth * optionHoursBlockSize,
        day: hourWidth * HOURS_IN_DAY,
      },
      ...rest,
    }
  }
}

function initialiseScaleOptions(
  startDate: Date,
  endDate: Date,
  { hoursBlockSize, range, unitWidth }: TimelineOptions
): TimelineScaleOption[] {
  const scaleConfig = getScaleConfig(range)
  const defaultConfig = find(scaleConfig, ({ isDefault }) => isDefault)
  const numberOfDays =
    differenceInDays(
      defaultConfig.calculateDate(startDate, defaultConfig.intervalSize),
      startDate
    ) - 1
  const maxWidth = unitWidth * numberOfDays

  return Object.keys(scaleConfig).map((scaleConfigKey) => {
    return mapScaleOption(
      startDate,
      maxWidth,
      hoursBlockSize,
      endDate
    )(scaleConfig[scaleConfigKey])
  })
}

export { initialiseScaleOptions }
