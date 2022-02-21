import DayPicker from 'react-day-picker'
import { selectors } from '@defencedigital/design-tokens'
import styled, { css } from 'styled-components'
import { isIE11 } from '../../../helpers'

const { color, spacing, fontSize } = selectors

interface StyledDayPickerProps {
  $isRange: boolean
  $isVisible: boolean
}

const DAY_SIZE = '34px'

export const StyledDayPicker = styled(DayPicker)<StyledDayPickerProps>`
  pointer-events: none;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      pointer-events: all;
    `}

  .DayPicker {
    display: inline-block;
  }

  .DayPicker-wrapper {
    position: relative;
    flex-direction: row;
    padding-bottom: ${spacing('8')};
    user-select: none;
    border-radius: 15px;
    outline: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    display: table;
    margin: 0 ${spacing('6')};
    margin-top: ${spacing('8')};
    border-spacing: 0;
    border-collapse: collapse;
    user-select: none;
  }

  .DayPicker-NavButton {
    position: absolute;
    top: ${spacing('6')};
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 33px;
    padding: 0;
    border: 1px solid ${color('neutral', '200')};
    border-radius: 10px;
    outline: none;
    color: ${color('neutral', '300')};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    background-color: ${color('neutral', 'white')};
    background-position: center;
    background-size: 18px;
    background-repeat: no-repeat;

    &:focus,
    &:hover {
      background-color: ${color('neutral', 'white')};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
        0 0 0 3px ${color('action', '100')};
    }

    &:active {
      background-color: ${color('neutral', '100')};
      box-shadow: 0 1px 3px transparent, 0 0 0 3px ${color('action', '100')};
    }
  }

  .DayPicker-NavButton--prev {
    left: ${spacing('6')};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EIcons/Navigation/chevron-left%3C/title%3E%3Cdefs%3E%3Cpolygon id='path-1' points='10.2755556 4.9422222 9.33333334 3.99999998 5.33333332 8 9.33333334 12 10.2755556 11.0577778 7.21777777 8'%3E%3C/polygon%3E%3C/defs%3E%3Cg id='Icons/Navigation/chevron-left' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Icons/Navigation/ic_chevron_left_18px' fill='%23233745' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
  }

  .DayPicker-NavButton--next {
    right: ${spacing('6')};
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EIcons/Navigation/chevron-right%3C/title%3E%3Cdefs%3E%3Cpolygon id='path-1' points='6.66666666 3.99999998 5.72444443 4.9422222 8.78222223 8 5.72444443 11.0577778 6.66666666 12 10.6666667 8'%3E%3C/polygon%3E%3C/defs%3E%3Cg id='Icons/Navigation/chevron-right' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Icons/Navigation/ic_chevron_right_18px' fill='%23233745' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    margin-bottom: ${spacing('8')};
    height: 1.5rem;
    color: ${color('neutral', '500')};
    font-size: ${fontSize('base')};
    line-height: 1.5rem;
    text-align: center;
    white-space: nowrap;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: ${spacing('8')};
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    display: table-cell;
    padding: 0 ${spacing('2')} ${spacing('4')};
    text-align: center;
    text-transform: uppercase;
    font-size: ${fontSize('xs')};
    color: ${color('neutral', '300')};
    font-weight: 600;
  }

  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    position: relative;
    display: table-cell;
    border: 1px solid ${color('neutral', '000')};
    font-size: ${fontSize('m')};
    font-weight: 400;
    color: ${color('neutral', '400')};
    text-align: center;
    vertical-align: middle;
    height: ${DAY_SIZE};
    width: ${DAY_SIZE};
    cursor: pointer;

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

        ${isIE11() &&
        css`
          left: -1px;
          top: -1px;
          right: -1px;
          height: ${DAY_SIZE};
        `}
      }
    }
  }

  .DayPicker-Day--outside {
    border: none;
    visibility: hidden;
  }

  &.DayPicker--interactionDisabled .DayPicker-Day,
  .DayPicker-Day--outside {
    cursor: default;
  }

  .DayPicker-Day:not(.DayPicker-Day--outside) {
    &.DayPicker-Day--today {
      color: ${color('warning', '700')};
    }

    &.DayPicker-Day--selected {
      background-color: ${color('action', '000')};
    }

    &.DayPicker-Day--start,
    &.DayPicker-Day--end {
      color: ${color('neutral', 'white')};
      background-color: ${color('action', '700')};
    }
  }

  &:not(.DayPicker--interactionDisabled) {
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside):hover {
      background-color: ${color('neutral', '100')};
    }
  }

  .DayPicker-Day--disabled {
    color: ${color('neutral', '200')};
    pointer-events: none;
  }
`
