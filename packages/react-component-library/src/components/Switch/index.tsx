import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Switch from './Switch'

interface ResponsiveSwitchProps extends SwitchType {}

const ResponsiveSwitch: React.FC<ResponsiveSwitchProps> = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  const classes = `
    rn-responsive-switch
    ${isDesktopOrLaptop ? 'is-desktop' : 'is-mobile'}
  `

  return (
    <div className={classes}>
      {isDesktopOrLaptop && <Switch {...props} />}
      {!isDesktopOrLaptop && '<Select {...props} /> // Placeholder'}
    </div>
  )
}

ResponsiveSwitch.displayName = 'ResponsiveSwitch'

export default ResponsiveSwitch
