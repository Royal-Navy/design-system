import React, { useRef, useState } from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import { v4 as uuidv4 } from 'uuid'
import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { format } from 'date-fns'
import TetherComponent from 'react-tether'
import DayPicker, {
  DateUtils,
  DayModifiers,
  DayPickerProps,
  RangeModifier,
} from 'react-day-picker'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
import { DatePickerInput } from './DatePickerInput'
import { useDatePickerOpenClose } from './useDatePickerOpenClose'
import { DATEPICKER_PLACEMENT, DATEPICKER_PLACEMENTS } from '.'
import { FLOATING_BOX_SCHEME, FloatingBox } from '../../primitives/FloatingBox'
import { getId } from '../../helpers'

export interface StateObject {
  from?: Date
  to?: Date
}

export type DatePickerPlacement =
  | typeof DATEPICKER_PLACEMENT.ABOVE
  | typeof DATEPICKER_PLACEMENT.BELOW
  | typeof DATEPICKER_PLACEMENT.LEFT
  | typeof DATEPICKER_PLACEMENT.RIGHT

export interface DatePickerProps extends ComponentWithClass {
  endDate?: Date
  format?: string
  id?: string
  isDisabled?: boolean
  isRange?: boolean
  label?: string
  name?: string
  onBlur?: (event: React.FormEvent) => void
  onChange?: (data: { startDate: Date; endDate: Date }) => void
  placement?: DatePickerPlacement
  startDate?: Date
  value?: string
  isOpen?: boolean
  disabledDays?: DayPickerProps['disabledDays']
  initialMonth?: DayPickerProps['initialMonth']
}

interface StyledDatePickerInputProps {
  isOpen?: boolean
  hasContent?: boolean
  isDisabled?: boolean
}

interface StyledTetherComponentProps {
  $isVisible?: boolean
}

interface StyledFloatingBoxProps {
  $isVisible?: boolean
}

interface StyledDayPickerProps {
  $isRange?: boolean
}

const { spacing, color, fontSize } = selectors

const StyledTetherComponent = styled<any>(TetherComponent)`
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

const StyledFloatingBox = styled<any>(FloatingBox)`
  pointer-events: none;
  opacity: 0;
  transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      pointer-events: all;
      opacity: 1;
    `}
`

const StyledDayPicker = styled<any>(DayPicker)`
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

const StyledDatePicker = styled.div``

function transformDates(
  startDate: Date,
  endDate: Date,
  datePickerFormat: string
) {
  if (startDate && endDate && differenceInMinutes(endDate, startDate) > 0) {
    return `${format(startDate, datePickerFormat)} - ${format(
      endDate,
      datePickerFormat
    )}`
  }

  if (startDate) {
    return format(startDate, datePickerFormat)
  }

  return ''
}

function getNewState(
  isRange: boolean,
  day: Date,
  state: StateObject
): StateObject {
  if (isRange) {
    if (state.from && (state.to || state.from > day)) {
      return { from: day }
    }

    return DateUtils.addDayToRange(day, state as RangeModifier)
  }

  return { from: day, to: day }
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  endDate,
  format: datePickerFormat = DATE_FORMAT.SHORT,
  id = uuidv4(),
  isDisabled,
  isRange,
  label = 'Select Date',
  name,
  onBlur,
  onChange,
  placement = DATEPICKER_PLACEMENT.BELOW,
  startDate,
  value,
  isOpen,
  disabledDays,
  initialMonth,
}) => {
  const componentRef = useRef(null)

  const {
    floatingBoxChildrenRef,
    handleOnClose,
    handleOnFocus,
    open,
  } = useDatePickerOpenClose(isOpen)

  const [state, setState] = useState<StateObject>({
    from: startDate,
    to: endDate,
  })

  const { from, to } = state
  const modifiers = { start: from, end: to }

  function handleDayClick(day: Date, { disabled }: DayModifiers) {
    if (disabled) return

    const newState = getNewState(isRange, day, state)
    setState(newState)

    if (onChange) {
      onChange({
        startDate: newState.from,
        endDate: newState.to,
      })
    }
  }

  const hasContent = (value && value.length) || from
  const PLACEMENTS = DATEPICKER_PLACEMENTS[placement]

  const titleId = getId('datepicker-title')
  const contentId = getId('day-picker')

  /**
   * Type error in upstream Tether package. Fix submitted.
   * Using createElement allows us to avoid the type error.
   *
   * https://github.com/danreeves/react-tether/issues/218
   * https://github.com/Microsoft/TypeScript/issues/27552
   */
  return (
    <StyledDatePicker ref={componentRef} data-testid="datepicker-wrapper">
      {/*
        // @ts-ignore */}
      {React.createElement(StyledTetherComponent, {
        offset: PLACEMENTS.OFFSET,
        attachment: PLACEMENTS.ATTACHMENT,
        targetAttachment: PLACEMENTS.TARGET_ATTACHMENT,
        $isVisible: open,
        renderTarget: (ref: React.RefObject<HTMLDivElement>) => (
          <DatePickerInput
            className={className}
            ref={ref}
            dayPickerId={contentId}
            id={id}
            name={name}
            label={label}
            value={transformDates(from, to, datePickerFormat)}
            onBlur={onBlur}
            onFocus={handleOnFocus}
            isDisabled={isDisabled}
            isOpen={open}
            onClose={handleOnClose}
            hasContent={!!hasContent}
          />
        ),
        renderElement: (ref: React.RefObject<HTMLDivElement>) => (
          <StyledFloatingBox
            contentId={contentId}
            ref={ref}
            position={PLACEMENTS.ARROW_POSITION}
            scheme={FLOATING_BOX_SCHEME.LIGHT}
            $isVisible={open}
            role="dialog"
            aria-modal
            aria-labelledby={titleId}
            aria-live="polite"
          >
            <div ref={floatingBoxChildrenRef}>
              <StyledDayPicker
                numberOfMonths={isRange ? 2 : 1}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
                initialMonth={startDate || initialMonth}
                disabledDays={disabledDays}
                $isRange={isRange}
              />
            </div>
          </StyledFloatingBox>
        ),
      })}
    </StyledDatePicker>
  )
}

DatePicker.displayName = 'DatePicker'
