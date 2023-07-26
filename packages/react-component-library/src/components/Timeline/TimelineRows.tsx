import React, { useContext, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { VariableSizeList, ListChildComponentProps } from 'react-window'
import AutoSizer, { Size } from 'react-virtualized-auto-sizer'

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
  /**
   * Toggle denoting whether to virtualize the rows.
   *
   * The native sidebar cannot currently be used with virtualized rows.
   */
  isVirtualized?: boolean
}

export const TimelineRows: React.FC<TimelineRowsProps> = ({
  children,
  className,
  render,
  isVirtualized,
  ...rest
}) => {
  const listRef = useRef<VariableSizeList>(null)
  const rowHeights = useRef<Record<number, number>>({})

  const count = React.Children.count(children)
  const hasChildren = count > 0
  const mainClasses = classNames('timeline__main', className)

  const {
    state: { currentScaleOption, days },
  } = useContext(TimelineContext)

  if (!currentScaleOption) {
    return null
  }

  // @TODO: Move into a custom hook

  const getRowHeight = (index: number) => {
    return rowHeights.current[index] ?? 0
  }

  const setRowHeight = (index: number, height: number) => {
    listRef?.current?.resetAfterIndex(0)
    rowHeights.current = { ...rowHeights.current, [index]: height }
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  const Row = ({ style, index }: ListChildComponentProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (ref.current) {
        setRowHeight(index, ref?.current?.children[0].clientHeight)
      }
    }, [index, ref])

    return (
      <div ref={ref} style={style}>
        {React.Children.toArray(children)[index]}
      </div>
    )
  }

  return (
    <StyledRows
      $hasDefaultStyles={!render}
      $width={currentScaleOption.widths.day * days.length}
      className={mainClasses}
      role="rowgroup"
      data-testid="timeline-rows"
      {...rest}
    >
      {!hasChildren && <TimelineNoData />}

      {hasChildren && !isVirtualized && children}

      {hasChildren && isVirtualized && (
        <AutoSizer>
          {({ height, width }: Size) => {
            return (
              <VariableSizeList
                height={height}
                width={width}
                itemCount={count}
                itemSize={getRowHeight}
                ref={listRef}
              >
                {Row}
              </VariableSizeList>
            )
          }}
        </AutoSizer>
      )}
    </StyledRows>
  )
}

TimelineRows.displayName = 'TimelineRows'
