import React, { forwardRef, MouseEvent, KeyboardEvent } from 'react'

import { StyledTabItem } from './partials/StyledTabItem'
import { StyledTab } from './partials/StyledTab'

interface TabItemProps {
  tabId: string
  children: React.ReactElement | string
  index: number
  isActive: boolean
  onClick: () => void
  onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => void
  isFullWidth?: boolean
  isScrollable?: boolean
}

export const TabItem = forwardRef<HTMLLIElement, TabItemProps>((props, ref) => {
  const {
    tabId,
    children,
    isActive,
    isFullWidth,
    isScrollable,
    onClick,
    onKeyDown,
  } = props

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onClick()
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
        onClick={handleClick}
      >
        <div>{children}</div>
      </StyledTab>
    </StyledTabItem>
  )
})
