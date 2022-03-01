import React from 'react'

import { ButtonGroupItemProps } from '.'
import { COMPONENT_SIZE, ComponentSizeType } from '../Forms'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import logger from '../../utils/logger'
import { StyledButtonGroup } from './partials/StyledButtonGroup'

export interface ButtonGroupProps extends ComponentWithClass {
  /**
   * Collection of `ButtonGroupItem` components to display as part of the group.
   */
  children: React.ReactElement<ButtonGroupItemProps>[]
  /**
   * Size of the component.
   */
  size?: ComponentSizeType
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  size = COMPONENT_SIZE.FORMS,
  ...rest
}) => {
  const mappedChildren = React.Children.map(
    children,
    (child: React.ReactElement<ButtonGroupItemProps>) => {
      if (child.props.size) {
        logger.warn(
          'Prop `size` on `ButtonGroupItem` will be replaced by `size` from `ButtonGroup`'
        )
      }

      return React.cloneElement(child, {
        ...child.props,
        size,
      })
    }
  )

  return (
    <StyledButtonGroup
      $size={size}
      role="group"
      data-testid="buttongroup"
      {...rest}
    >
      {mappedChildren}
    </StyledButtonGroup>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
