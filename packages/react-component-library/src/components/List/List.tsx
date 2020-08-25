import React from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ListItem, ListItemProps } from './ListItem'
import { useListItem } from './useListItem'
import { warnIfOverwriting } from '../../helpers'

interface ListProps extends ComponentWithClass {
  children:
    | React.ReactElement<ListItemProps>
    | React.ReactElement<ListItemProps>[]
}

export const List: React.FC<ListProps> = ({ children, className }) => {
  const { isActive, setActiveIndex } = useListItem()

  const classes = classNames('rn-list', className)

  const mapped = React.Children.map(
    children,
    (child: React.ReactElement<ListItemProps>, index: number) => {
      warnIfOverwriting(child.props, 'isActive', ListItem.name)
      warnIfOverwriting(child.props, 'onMouseEnter', ListItem.name)
      warnIfOverwriting(child.props, 'onMouseLeave', ListItem.name)

      return React.cloneElement(child, {
        isActive: isActive(index),
        onMouseEnter: () => setActiveIndex(index),
        onMouseLeave: () => setActiveIndex(null),
      })
    }
  )

  return (
    <ol className={classes} role="group" data-testid="list">
      {mapped}
    </ol>
  )
}

List.displayName = 'List'
