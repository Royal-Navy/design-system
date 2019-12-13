import React from 'react'
import classNames from 'classnames'

import { ButtonGroupItemProps } from '.'

export interface ButtonGroupProps {
  children: React.ReactElement<ButtonGroupItemProps>[]
  className?: string
  size?: 'small' | 'regular' | 'large' | 'xlarge'
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  size = 'regular',
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
