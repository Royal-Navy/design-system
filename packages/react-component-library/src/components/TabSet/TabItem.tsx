import React, { forwardRef, MouseEvent, KeyboardEvent } from 'react'
import classNames from 'classnames'

interface TabItemProps {
  tabId: string
  children: React.ReactElement | string
  index: number
  isActive: boolean
  onClick: () => void
  onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => void
  isScrollable?: boolean
}

export const TabItem = forwardRef<HTMLLIElement, TabItemProps>(
  ({ tabId, children, isActive, onClick, onKeyDown }, ref) => {
    const tabClasses = classNames('rn-tab-set__tab', {
      'is-active': isActive,
    })

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
      e.preventDefault()
      onClick()
    }

    return (
      <li
        className="rn-tab-set__tab-item"
        ref={ref}
        role="tab"
        aria-controls={tabId}
        aria-selected={!!isActive}
        tabIndex={!isActive ? -1 : 0}
        data-testid="tab-set-tab"
        aria-label={children.toString()}
        onKeyDown={onKeyDown}
      >
        <button className={tabClasses} onClick={handleClick}>
          <div>{children}</div>
        </button>
      </li>
    )
  }
)
