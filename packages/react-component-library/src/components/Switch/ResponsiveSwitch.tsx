import React from 'react'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import { Select } from '../Select'
import { Switch, SwitchProps } from '.'

export const ResponsiveSwitch: React.FC<SwitchProps> = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  const classes = classNames('rn-response-switch', {
    [`is-${isDesktopOrLaptop ? 'desktop' : 'mobile'}`]: true,
  })

  return (
    <div className={classes} data-testid="responsive-switch">
      {isDesktopOrLaptop ? (
        <Switch {...props} />
      ) : (
        <Select data-testid="responsive-switch-select" {...props} />
      )}
    </div>
  )
}

ResponsiveSwitch.displayName = 'ResponsiveSwitch'
