import React from 'react'
import { type Spacing } from '@royalnavy/design-tokens'

import { StyledProgressBar, StyledProgressIndicator } from './partials'
import { fixProgressValue } from './fixProgressValue'

import { ComponentWithClass } from '../../common/ComponentWithClass'

interface ProgressBarProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Value from 0 to 100
   */
  value: number
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Height of the control, `'2'` by default.
   */
  size?: Spacing
}

export const ProgressBar = ({
  value,
  className,
  isDisabled = false,
  size = '2',
}: ProgressBarProps) => {
  const fixedValue = fixProgressValue(value)

  return (
    <StyledProgressBar
      className={className}
      $isDisabled={isDisabled}
      role="progressbar"
      aria-valuenow={fixedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={`${fixedValue} percent complete`}
      title={`${fixedValue}%`}
    >
      <StyledProgressIndicator
        role="presentation"
        $height={size}
        $isDisabled={isDisabled}
        style={{ width: `${fixedValue}%` }}
      />
    </StyledProgressBar>
  )
}
