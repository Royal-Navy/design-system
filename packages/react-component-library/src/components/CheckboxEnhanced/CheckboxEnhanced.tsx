import React, { useRef } from 'react'

import { Checkbox, CheckboxProps } from '../Checkbox'
import { StyledDescription } from './partials/StyledDescription'
import { StyledCheckboxEnhanced } from './partials/StyledCheckboxEnhanced'

export interface CheckboxEnhancedProps extends Omit<CheckboxProps, 'label'> {
  description?: string
  tabIndex?: number
  title: string
}

export const CheckboxEnhanced: React.FC<CheckboxEnhancedProps> = ({
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
    <StyledCheckboxEnhanced
      aria-checked={isChecked}
      data-testid="checkboxenhanced-wrapper"
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      role="checkbox"
      tabIndex={tabIndex}
    >
      <Checkbox
        isChecked={isChecked}
        label={title}
        name={name}
        ref={ref}
        {...rest}
      />
      {description && (
        <StyledDescription
          className="rn-checkbox-enhanced__description"
          data-testid="checkboxenhanced-description"
        >
          {description}
        </StyledDescription>
      )}
    </StyledCheckboxEnhanced>
  )
}

CheckboxEnhanced.displayName = 'CheckboxEnhanced'
