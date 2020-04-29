import React from 'react'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import { Select } from '../Select'
import { Switch } from '.'
import { SwitchType } from '../../types/Switch'

export const ResponsiveSwitch: React.FC<SwitchType> = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  const classes = classNames('rn-response-switch', {
    'is-desktop': isDesktopOrLaptop,
    'is-mobile': !isDesktopOrLaptop,
  })

  return (
    <div className={classes} data-testid="responsive-switch">
      {isDesktopOrLaptop ? <Switch {...props} /> : <Select {...props} />}
    </div>
  )
}

ResponsiveSwitch.displayName = 'ResponsiveSwitch'
