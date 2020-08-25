import React from 'react'
import classNames from 'classnames'
import { IconChevronRight } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getId } from '../../helpers'

export interface ListItemProps extends ComponentWithClass {
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

  const titleId = getId('list-title')

  return (
    <li className={classes} data-testid="list-item" role="presentation">
      <button
        className="rn-list__item-content"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div role="listitem" aria-labelledby={titleId}>
          <h2
            className="rn-list__item-title"
            id={titleId}
            data-testid="list-item-heading"
          >
            {title}
          </h2>
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
