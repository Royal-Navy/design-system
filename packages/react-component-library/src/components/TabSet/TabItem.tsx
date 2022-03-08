import React, { forwardRef, MouseEvent, KeyboardEvent } from 'react'

import { StyledTabItem } from './partials/StyledTabItem'
import { StyledTab } from './partials/StyledTab'

interface TabItemProps {
  tabId: string
  children: React.ReactElement | string
  isActive: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => void
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
        role="tab"
        aria-controls={tabId}
        aria-selected={!!isActive}
        tabIndex={!isActive ? -1 : 0}
        data-testid="tab-set-tab"
        aria-label={children.toString()}
        onKeyDown={onKeyDown}
      >
        <StyledTab
          $isActive={isActive}
          $isScrollable={isScrollable}
          data-testid="tab-set-tab-button"
          onClick={handleClick}
        >
          <div>{children}</div>
        </StyledTab>
      </StyledTabItem>
    )
  }
)
