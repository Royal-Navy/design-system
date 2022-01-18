import React, { useContext } from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledRows } from './partials/StyledRows'
import { TimelineNoData } from './TimelineNoData'
import { TimelineContext, TimelineRowProps } from '.'

type TimelineRowsChildrenType =
  | React.ReactElement<TimelineRowProps>
  | React.ReactElement<TimelineRowProps>[]

export interface TimelineRowsProps extends ComponentWithClass {
  /**
   * Supply children to be rendered.
   */
  children: TimelineRowsChildrenType
  /**
   * Supply a custom presentation layer.
   */
  render?: (props: {
    index: number
    isOddNumber: boolean
    offsetPx: string
    widthPx: string
  }) => React.ReactElement
}

export const TimelineRows: React.FC<TimelineRowsProps> = ({
  children,
  className,
  render,
  ...rest
}) => {
  const hasChildren = React.Children.count(children) > 0
  const mainClasses = classNames('timeline__main', className)
  const {
    state: { currentScaleOption, days },
  } = useContext(TimelineContext)

  return (
    <StyledRows
      $hasDefaultStyles={!render}
      $width={currentScaleOption.widths.day * days.length}
      className={mainClasses}
      role="rowgroup"
      data-testid="timeline-rows"
      {...rest}
    >
      {hasChildren ? children : <TimelineNoData />}
    </StyledRows>
  )
}

TimelineRows.displayName = 'TimelineRows'
