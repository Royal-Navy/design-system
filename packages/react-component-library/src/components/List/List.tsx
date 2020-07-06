import React from 'react'
import classNames from 'classnames'

import { ListItem, ListItemProps } from './ListItem'
import { useListItem } from './useListItem'

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
