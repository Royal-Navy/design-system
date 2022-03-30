import React, { forwardRef, MouseEvent, KeyboardEvent } from 'react'

import { StyledHiddenBoldTextWidthFix } from './partials/StyledHiddenBoldTextWidthFix'
import { StyledTabItem } from '../TabBase/partials/StyledTabItem'
import { StyledTab } from '../TabBase/partials/StyledTab'

interface TabItemProps {
  tabId: string
  children: React.ReactElement | string
  isActive: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void
  isFullWidth?: boolean
  isScrollable?: boolean
}

export const TabItem = forwardRef<HTMLLIElement, TabItemProps>(
  (
    {
      tabId,
      children,
      isActive,
      isFullWidth,
      isScrollable,
      onClick,
      onKeyDown,
    },
    ref
  ) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      onClick(e)
    }

    return (
      <StyledTabItem
        $isFullWidth={isFullWidth}
        $isScrollable={isScrollable}
        ref={ref}
        role="presentation"
        data-testid="tab-set-tab"
      >
        <StyledTab
          $isActive={isActive}
          $isScrollable={isScrollable}
          id={`tab-button-${tabId}`}
          role="tab"
          aria-controls={`tab-content-${tabId}`}
          aria-selected={!!isActive}
          onKeyDown={onKeyDown}
          tabIndex={!isActive ? -1 : 0}
          data-testid="tab-set-tab-button"
          onClick={handleClick}
        >
          <div role="presentation">{children}</div>
          <StyledHiddenBoldTextWidthFix aria-hidden>
            {children}
          </StyledHiddenBoldTextWidthFix>
        </StyledTab>
      </StyledTabItem>
    )
  }
)
