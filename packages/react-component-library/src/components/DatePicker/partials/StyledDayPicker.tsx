import { DayPicker } from 'react-day-picker'
import { color, spacing, fontSize } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { BUTTON_VARIANT, getButtonStyles } from '../../Button'
import { COMPONENT_SIZE } from '../../Forms'

const DAY_SIZE = '34px'

export const StyledDayPicker = styled(DayPicker)`
  .rdp-vhidden {
    appearance: none;
    background: transparent;
    border: 0;
    box-sizing: border-box;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 1px;
  }

  .rdp-months {
    position: relative;
    flex-direction: row;
    padding-bottom: ${spacing('8')};
    user-select: none;
    border-radius: 15px;
    outline: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .rdp-month {
    margin: ${spacing('6')} ${spacing('6')} 0;
    user-select: none;
  }

  .rdp-nav_button {
    ${getButtonStyles({
      $size: COMPONENT_SIZE.SMALL,
      $variant: BUTTON_VARIANT.TERTIARY,
    })}
    position: absolute;
    top: ${spacing('4')};
    width: 38px;
    background-position: center;
    background-size: 18px;
    background-repeat: no-repeat;

    svg {
      display: none;
    }
  }

  .rdp-nav_button_previous {
    left: ${spacing('6')};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EIcons/Navigation/chevron-left%3C/title%3E%3Cdefs%3E%3Cpolygon id='path-1' points='10.2755556 4.9422222 9.33333334 3.99999998 5.33333332 8 9.33333334 12 10.2755556 11.0577778 7.21777777 8'%3E%3C/polygon%3E%3C/defs%3E%3Cg id='Icons/Navigation/chevron-left' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Icons/Navigation/ic_chevron_left_18px' fill='%23233745' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
  }

  .rdp-nav_button_next {
    right: ${spacing('6')};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EIcons/Navigation/chevron-right%3C/title%3E%3Cdefs%3E%3Cpolygon id='path-1' points='6.66666666 3.99999998 5.72444443 4.9422222 8.78222223 8 5.72444443 11.0577778 6.66666666 12 10.6666667 8'%3E%3C/polygon%3E%3C/defs%3E%3Cg id='Icons/Navigation/chevron-right' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Icons/Navigation/ic_chevron_right_18px' fill='%23233745' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
  }

  .rdp-caption_label {
    width: 100%;
    height: 1.5rem;
    color: ${color('neutral', '600')};
    font-size: ${fontSize('base')};
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    white-space: nowrap;
  }

  .rdp-table {
    border-spacing: 0;
    border-collapse: collapse;
    margin-top: ${spacing('10')};
  }

  .rdp-head_cell {
    display: table-cell;
    padding: 0 ${spacing('2')} ${spacing('4')};
    text-align: center;
    text-transform: uppercase;
    font-size: ${fontSize('xs')};
    color: ${color('neutral', '400')};
    font-weight: 600;
  }

  .rdp-cell {
    padding: 0;
    height: ${DAY_SIZE};
    width: ${DAY_SIZE};

    &:not(:empty) {
      border: 1px solid ${color('neutral', '000')};
    }
  }

  .rdp-day {
    position: relative;
    display: table-cell;
    border: none;
    font-size: ${fontSize('m')};
    font-weight: 400;
    background: transparent;
    color: ${color('neutral', '500')};
    text-align: center;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    cursor: pointer;

    &.rdp-day_today {
      color: ${color('warning', '800')};
    }

    &.rdp-day_selected {
      background-color: ${color('action', '100')};
    }

    &.rdp-day_start,
    &.rdp-day_end {
      color: ${color('neutral', 'white')};
      background-color: ${color('action', '700')};
    }

    &:focus {
      outline: none;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 0 2px ${color('action', '500')},
          0 0 0 4px ${color('action', '100')};
        z-index: 1000;
      }
    }
  }

  .rdp-day:not(.rdp-day_disabled):not(.rdp-day_start):not(.rdp-day_end):hover {
    background-color: ${color('neutral', '100')};
  }

  .rdp-day_disabled {
    color: ${color('neutral', '200')};
    pointer-events: none;
  }
`
