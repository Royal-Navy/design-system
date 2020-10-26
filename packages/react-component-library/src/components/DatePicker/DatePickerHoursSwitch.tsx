import React from 'react'
import { padStart } from 'lodash'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { DatePickerHoursBlockSizeType } from './DatePicker'
import { Switch, SWITCH_SIZE } from '../Switch'

const { color, spacing } = selectors

interface DatePickerHoursSwitchProps {
  hoursBlockSize: DatePickerHoursBlockSizeType
  isDisabled: boolean
  onChange: (event: React.FormEvent<HTMLInputElement>, value: string) => void
  value: string
}

const StyledSwitch = styled(Switch)`
  color: ${color('action', '900')};
  font-weight: 600;
  margin: 0 ${spacing('6')} ${spacing('6')} ${spacing('6')};

  .rn-switch__container {
    background-color: ${color('neutral', 'white')};
    border-color: ${color('neutral', '100')};
    border-radius: unset;
    display: flex;
    padding: unset;
  }

  .rn-switch__option {
    flex-basis: 100%;
    text-align: center;
    padding: ${spacing('4')} 0;
    border-radius: unset;
    border-right: 1px solid ${color('neutral', '100')};

    &:last-child {
      border-right: unset;
    }

    &.is-active {
      background-color: ${color('action', '100')};
      color: unset;
    }

    &:hover {
      background-color: ${color('action', '500')};
    }
  }

  .rn-switch__option--disabled {
    color: ${color('neutral', '200')};
    pointer-events: none;
  }
`

export const DatePickerHoursSwitch: React.FC<DatePickerHoursSwitchProps> = ({
  hoursBlockSize,
  ...rest
}) => {
  if (!hoursBlockSize) {
    return null
  }

  const numberOfBlocks = 24 / hoursBlockSize
  const options = Array.from(Array(numberOfBlocks).keys()).map(
    (blockNumber) => {
      const timeHours = blockNumber * hoursBlockSize

      const time = `${padStart(timeHours.toString(), 2, '0')}:00`
      return {
        label: time,
        value: time,
      }
    }
  )

  return <StyledSwitch options={options} size={SWITCH_SIZE.SMALL} {...rest} />
}

DatePickerHoursSwitch.displayName = 'DatePickerHoursSwitch'
