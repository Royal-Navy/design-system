import React, { forwardRef, MouseEvent } from 'react'
import classNames from 'classnames'

interface TabItemProps {
  tabId: string
  children: React.ReactElement | string
  index: number
  isActive: boolean
  onClick: () => void
  isScrollable?: boolean
}

export const TabItem = forwardRef<HTMLLIElement, TabItemProps>(
  ({ tabId, children, isActive, onClick }, ref) => {
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
        data-testid="tab"
        ref={ref}
        role="tab"
        aria-controls={tabId}
        aria-selected={!!isActive}
        tabIndex={!isActive ? -1 : 0}
      >
        <button className={tabClasses} onClick={handleClick}>
          <div>{children}</div>
        </button>
      </li>
    )
  }
)
