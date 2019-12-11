import React, { forwardRef } from 'react'
import classNames from 'classnames'

interface TabItemProps {
  children: React.ReactElement | string
  index: number
  active: boolean
  onClick: () => void
  scrollable?: boolean
}

export const TabItem = forwardRef<HTMLLIElement, TabItemProps>(
  ({ children, index, active, onClick, scrollable }, ref) => {
    const tabClasses = classNames('rn-tab-set__tab', {
      'is-active': active,
    })

    return (
      <li className="rn-tab-set__tab-item" data-testid="tab" ref={ref}>
        <button className={tabClasses} onClick={onClick}>
          <div>{children}</div>
        </button>
      </li>
    )
  }
)
