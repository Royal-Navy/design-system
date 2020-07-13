import React from 'react'
import classNames from 'classnames'

import { IconChevronRight } from '@royalnavy/icon-library'
import { PropsWithClassName } from '../../types/PropsWithClassName'

export interface ListItemProps extends PropsWithClassName {
  children: string | string[]
  isActive?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void
  title: string
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  isActive,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  title,
}) => {
  const classes = classNames(
    'rn-list__item',
    {
      'is-inactive': isActive === false,
    },
    className
  )

  return (
    <li className={classes} data-testid="list-item">
      <button
        className="rn-list__item-content"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div>
          <h2 className="rn-list__item-title">{title}</h2>
          <p className="rn-list__item-description">{children}</p>
        </div>
        <div>
          <span className="rn-list__item-action">
            <IconChevronRight />
          </span>
        </div>
      </button>
    </li>
  )
}

ListItem.displayName = 'ListItem'
