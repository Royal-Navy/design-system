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

type ScaleConfigOptionType = {
  calculateDate: (date: Date, intervalSize: number) => Date
  hoursBlockSize?: BlockSizeType
  intervalSize: number
  isDefault?: boolean
  scale?: number
}
type ScaleConfigType = { [key: string]: ScaleConfigOptionType }

function getDefaultScaleConfigOption(
  startDate: Date,
  endDate: Date,
  monthIntervalSize: number
) {
  if (endDate) {
    return {
      calculateDate: addDays,
      intervalSize: differenceInDays(endDate, startDate) + 1,
      isDefault: true,
    }
  }

  return {
    calculateDate: addMonths,
    intervalSize: monthIntervalSize || 1,
    isDefault: true,
  }
}

function getScaleConfig(
  startDate: Date,
  endDate: Date,
  monthIntervalSize: number
): ScaleConfigType {
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
    month: getDefaultScaleConfigOption(startDate, endDate, monthIntervalSize),
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
  hoursBlockSize: BlockSizeType
) {
  return ({
    calculateDate,
    intervalSize,
    scale,
    hoursBlockSize: configHoursBlockSize,
    ...rest
  }: ScaleConfigOptionType): TimelineScaleOption => {
    const to = addDays(calculateDate(startDate, intervalSize), -1)
    const numberOfHours = differenceInHours(to, startDate) + HOURS_IN_DAY
    const optionHoursBlockSize =
      configHoursBlockSize || hoursBlockSize || TIMELINE_BLOCK_SIZE.QUARTER_DAY
    const hourWidth = (maxWidth / numberOfHours) * (scale || 1)

    return {
      calculateDate,
      intervalSize,
      to,
      from: startDate,
      hoursBlockSize: optionHoursBlockSize,
      widths: {
        hour: hourWidth * optionHoursBlockSize,
        day: hourWidth * HOURS_IN_DAY,
      },
      ...rest,
    }
  }
}

function initialiseScaleOptions({
  endDate,
  hoursBlockSize,
  range,
  startDate,
  unitWidth,
}: TimelineOptions): TimelineScaleOption[] {
  const scaleConfig = getScaleConfig(startDate, endDate, range)
  const defaultConfig = find(scaleConfig, ({ isDefault }) => isDefault)
  const numberOfDays = endDate
    ? defaultConfig.intervalSize
    : differenceInDays(
        defaultConfig.calculateDate(startDate, defaultConfig.intervalSize),
        startDate
      )
  const maxWidth = unitWidth * numberOfDays

  return Object.keys(scaleConfig).map((scaleConfigKey) => {
    return mapScaleOption(
      startDate,
      maxWidth,
      hoursBlockSize
    )(scaleConfig[scaleConfigKey])
  })
}

export { initialiseScaleOptions }
