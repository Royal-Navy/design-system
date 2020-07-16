import React from 'react'
import classNames from 'classnames'

import { ListItem, ListItemProps } from './ListItem'
import { useListItem } from './useListItem'
import { warnIfOverwriting } from '../../helpers'
import { PropsWithClassName } from '../../types/PropsWithClassName'

interface ListProps extends PropsWithClassName {
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

  return <ol className={classes}>{mapped}</ol>
}

List.displayName = 'List'
