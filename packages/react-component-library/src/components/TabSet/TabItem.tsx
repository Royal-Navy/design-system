import React, { forwardRef, MouseEvent } from 'react'
import classNames from 'classnames'

interface TabItemProps {
  children: React.ReactElement | string
  index: number
  isActive: boolean
  onClick: () => void
  isScrollable?: boolean
}

export const TabItem = forwardRef<HTMLLIElement, TabItemProps>(
  ({ children, isActive, onClick }, ref) => {
    const tabClasses = classNames('rn-tab-set__tab', {
      'is-active': isActive,
    })

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
      e.preventDefault()
      onClick()
    }

    return (
      <li className="rn-tab-set__tab-item" data-testid="tab" ref={ref}>
        <button className={tabClasses} onClick={handleClick}>
          <div>{children}</div>
        </button>
      </li>
    )
  }
)
