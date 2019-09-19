import React from 'react'
// @ts-ignore
import { useMediaQuery } from 'react-responsive'

import { SwitchType } from '../../types/Switch'
import Switch from './Switch'
import { Select } from '../Select'

const ResponsiveSwitch: React.FC<SwitchType> = props => {
  /**
   * https://github.com/Royal-Navy/standards-toolkit/tree/develop/packages/css-framework#breakpoints
   *
   * - root: 0px
   * - s: 576px
   * - m: 768px
   * - l: 992px
   * - xl: 1200px
   * - xxl: 1400px
   */
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  })

  const classes = `
    rn-responsive-switch
    ${isDesktopOrLaptop ? 'is-desktop' : 'is-mobile'}
  `

  return (
    <div className={classes}>
      {isDesktopOrLaptop && <Switch {...props} />}
      {!isDesktopOrLaptop && <Select {...props} />}
    </div>
  )
}

ResponsiveSwitch.displayName = 'ResponsiveSwitch'

export default ResponsiveSwitch
