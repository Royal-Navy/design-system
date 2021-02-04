import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import TetherComponent from 'react-tether'

const { spacing, color, fontSize } = selectors

export const StyledTetherComponent = styled<any>(TetherComponent)`
  z-index: 9999;
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
    outline: none;
    user-select: none;
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
    top: 1rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border: 1px solid ${color('neutral', '200')};
    border-radius: 2px;
    color: ${color('neutral', '300')};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.07);
    background-color: ${color('neutral', 'white')};
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
  }

  .DayPicker-NavButton--prev {
    left: 1rem;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EIcons/Navigation/chevron-left%3C/title%3E%3Cdefs%3E%3Cpolygon id='path-1' points='10.2755556 4.9422222 9.33333334 3.99999998 5.33333332 8 9.33333334 12 10.2755556 11.0577778 7.21777777 8'%3E%3C/polygon%3E%3C/defs%3E%3Cg id='Icons/Navigation/chevron-left' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Icons/Navigation/ic_chevron_left_18px' fill='%23233745' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
  }

  .DayPicker-NavButton--next {
    right: 1rem;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EIcons/Navigation/chevron-right%3C/title%3E%3Cdefs%3E%3Cpolygon id='path-1' points='6.66666666 3.99999998 5.72444443 4.9422222 8.78222223 8 5.72444443 11.0577778 6.66666666 12 10.6666667 8'%3E%3C/polygon%3E%3C/defs%3E%3Cg id='Icons/Navigation/chevron-right' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Icons/Navigation/ic_chevron_right_18px' fill='%23233745' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    margin-bottom: ${spacing('8')};
    text-align: center;
    height: 1.5rem;
    line-height: 1.5rem;
  }

  .DayPicker-Caption > div {
    font-size: ${fontSize('base')};
    color: ${color('neutral', '400')};
    font-weight: 600;
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
    font-size: ${fontSize('s')};
    color: ${color('neutral', '400')};
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
    display: table-cell;
    padding: ${spacing('4')};
    border: 1px solid ${color('neutral', '100')};
    font-size: ${fontSize('s')};
    font-weight: 600;
    color: ${color('neutral', '400')};
    background-color: ${color('neutral', 'white')};
    text-align: center;
    cursor: pointer;
  }

  .DayPicker-Day--outside {
    border: none;
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Day--today {
    color: ${color('action', '400')};
    font-weight: 700;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;

    background-color: ${color('action', '100')};
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${color('action', '100')};
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${color('action', '500')};
    color: ${color('neutral', 'white')};
  }

  .DayPicker-Day--disabled {
    color: ${color('neutral', '200')};
    pointer-events: none;
  }
`
