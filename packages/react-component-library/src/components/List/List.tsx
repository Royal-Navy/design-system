import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ListItem, ListItemProps } from './ListItem'
import { StyledList } from './partials/StyledList'
import { useListItem } from './useListItem'
import { warnIfOverwriting } from '../../helpers'

interface ListProps extends ComponentWithClass {
  children:
    | React.ReactElement<ListItemProps>
    | React.ReactElement<ListItemProps>[]
}

export const List: React.FC<ListProps> = ({ children, ...rest }) => {
  const { isActive, setActiveIndex } = useListItem()

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
    <StyledList role="group" data-testid="list" {...rest}>
      {mapped}
    </StyledList>
  )
}

List.displayName = 'List'
