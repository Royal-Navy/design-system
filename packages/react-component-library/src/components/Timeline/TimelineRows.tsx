import React, { useContext } from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledRows } from './partials/StyledRows'
import { TimelineNoData } from './TimelineNoData'
import { TimelineContext, TimelineRowProps } from '.'
import { StyledRow } from './partials/StyledRow'

type TimelineRowsChildrenType =
  | React.ReactElement<TimelineRowProps>
  | React.ReactElement<TimelineRowProps>[]

export interface TimelineRowsProps extends ComponentWithClass {
  children: TimelineRowsChildrenType
  renderColumns?: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string
  ) => React.ReactElement
}

export const TimelineRows: React.FC<TimelineRowsProps> = ({
  children,
  className,
  renderColumns,
  ...rest
}) => {
  const hasChildren = React.Children.count(children) > 0
  const mainClasses = classNames('timeline__main', className)
  const {
    state: { currentScaleOption, days },
  } = useContext(TimelineContext)

  return (
    <StyledRows
      $hasDefaultStyles={!renderColumns}
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
