import React from 'react'
import classNames from 'classnames'

import { ButtonGroupItemProps } from '.'
import { BUTTON_SIZE } from '../Button'

export interface ButtonGroupProps {
  children: React.ReactElement<ButtonGroupItemProps>[]
  className?: string
  size?:
    | typeof BUTTON_SIZE.LARGE
    | typeof BUTTON_SIZE.REGULAR
    | typeof BUTTON_SIZE.SMALL
    | typeof BUTTON_SIZE.XLARGE
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  size = BUTTON_SIZE.REGULAR,
}) => {
  const classes = classNames('rn-btn-group', className, {
    [`rn-btn-group--${size}`]: size,
  })

  return (
    <div className={classes} data-testid="rn-buttongroup">
      {React.Children.map(
        children,
        (child: React.ReactElement<ButtonGroupItemProps>) => {
          if (child.props.size) {
            console.warn(
              'Prop `size` on `ButtonGroupItem` will be replaced by `size` from `ButtonGroup`'
            )
          }

          return React.cloneElement(child, {
            ...child.props,
            size,
          })
        }
      )}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
