import React from 'react'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import { Select } from '../Select'
import { Switch, SwitchProps } from '.'

export const ResponsiveSwitch: React.FC<SwitchProps> = ({
  className,
  ...rest
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  const classes = classNames(
    {
      [`is-${isDesktopOrLaptop ? 'desktop' : 'mobile'}`]: true,
    },
    className
  )

  return (
    <div className={classes} data-testid="responsive-switch">
      {isDesktopOrLaptop ? (
        <Switch {...rest} />
      ) : (
        <Select data-testid="responsive-switch-select" {...rest} />
      )}
    </div>
  )
}

ResponsiveSwitch.displayName = 'ResponsiveSwitch'
