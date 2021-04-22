import React from 'react'
import classNames from 'classnames'
import { CSSProp } from 'styled-components'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledNoEvents } from './partials/StyledNoEvents'
import { StyledRow } from './partials/StyledRow'
import { StyledRowContent } from './partials/StyledRowContent'
import { StyledRowHeader } from './partials/StyledRowHeader'
import { SubcomponentProps } from '../../common/SubcomponentProps'
import { TimelineContext, TimelineEventsProps } from '.'
import { useTimelineRowContent } from './hooks/useTimelineRowContent'

export interface TimelineRowProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
  css?: CSSProp
  name?: string
  ariaLabel?: string
  contentProps?: SubcomponentProps
  headerProps?: SubcomponentProps
  renderRowHeader?: (name: string) => React.ReactElement
  isHeader?: boolean
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  children,
  contentProps = {},
  css,
  headerProps = {},
  name,
  ariaLabel,
  renderRowHeader,
  isHeader,
  className,
  ...rest
}) => {
  const classes = classNames('timeline__row', className)
  const { noCells, rowContentRef } = useTimelineRowContent(isHeader, [children])
  const { css: contentCss, ...restContentProps } = contentProps
  const { css: headerCss, ...restHeaderProps } = headerProps

  return (
    <TimelineContext.Consumer>
      {({ hasSide }) => (
        <StyledRow
          $css={css}
          className={classes}
          data-testid="timeline-row"
          role="row"
          {...rest}
        >
          {hasSide && (
            <StyledRowHeader
              $css={headerCss}
              $isHeader={isHeader}
              data-testid="timeline-row-header"
              role="rowheader"
              aria-label={ariaLabel || name}
              {...restHeaderProps}
            >
              {renderRowHeader ? renderRowHeader(name) : name}
            </StyledRowHeader>
          )}
          <StyledRowContent
            $css={contentCss}
            ref={rowContentRef}
            {...restContentProps}
          >
            {noCells && <StyledNoEvents role="cell">No events</StyledNoEvents>}
            {children}
          </StyledRowContent>
        </StyledRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineRow.displayName = 'TimelineRow'
