import DayPicker from 'react-day-picker'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

const { color } = selectors

export const StyledDayPicker = styled<any>(DayPicker)`
  ${({ $isRange }) =>
    $isRange &&
    css`
      .DayPicker-Day {
        border-radius: 0;
      }

      .DayPicker-Day--start,
      .DayPicker-Day--end {
        background-color: ${color('action', '500')} !important;
        color: ${color('neutral', 'white')};
      }

      .DayPicker-Day--start {
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
      }

      .DayPicker-Day--end {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
      }
    `}
`
