import React, { useRef } from 'react'

import { Radio, RadioProps } from '../Radio'
import { StyledRadioEnhanced } from './partials/StyledRadioEnhanced'
import { StyledDescription } from './partials/StyledDescription'

export interface RadioEnhancedProps extends Omit<RadioProps, 'label'> {
  description?: string
  tabIndex?: number
  title: string
}

export const RadioEnhanced: React.FC<RadioEnhancedProps> = ({
  description,
  isChecked,
  name,
  tabIndex = 0,
  title,
  isInvalid,
  ...rest
}) => {
  const ref = useRef(null)

  const handleClick = (_: React.MouseEvent<HTMLDivElement>) => {
    ref.current.click()
  }

  const handleKeyUp = (_: React.KeyboardEvent) => {
    ref.current.focus()
  }

  return (
    <StyledRadioEnhanced
      aria-checked={isChecked}
      className="rn-radio-enhanced"
      data-testid="radioenhanced-wrapper"
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      role="radio"
      tabIndex={tabIndex}
    >
      <Radio
        isChecked={isChecked}
        label={title}
        name={name}
        ref={ref}
        {...rest}
      />
      {description && (
        <StyledDescription data-testid="radioenhanced-description">
          {description}
        </StyledDescription>
      )}
    </StyledRadioEnhanced>
  )
}

RadioEnhanced.displayName = 'RadioEnhanced'
