import React from 'react'
import { type Spacing } from '@royalnavy/design-tokens'

import {
  StyledProgressBar,
  StyledProgressContainer,
  StyledProgressIndicator,
} from './partials'
import { fixProgressValue } from './fixProgressValue'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { Text } from '../Text'

interface ProgressBarProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Value from 0 to 100
   */
  value: number
  /**
   * Toggles whether the component appears disabled or not.
   */
  isDisabled?: boolean
  /**
   * Height of the control, `'4'` by default.
   */
  size?: Spacing
  /**
   * Optional whether to display the percentage as text. Defaults to false.
   */
  showPercentage?: boolean
}

export const ProgressBar = ({
  value,
  className,
  isDisabled = false,
  size = '4',
  showPercentage = false,
}: ProgressBarProps) => {
  const fixedValue = fixProgressValue(value)

  return (
    <StyledProgressContainer>
      <StyledProgressBar
        className={className}
        $height={size}
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
      {showPercentage && (
        <Text el="span" data-testid="percentage-text" aria-hidden="true" variant="small">{`${fixedValue}%`}</Text>
      )}
    </StyledProgressContainer>
  )
}
