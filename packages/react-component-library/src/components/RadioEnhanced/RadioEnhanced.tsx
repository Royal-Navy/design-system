import React, { useRef } from 'react'

import { Radio, RadioProps } from '../Radio'

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
    <div
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
        <p
          className="rn-radio-enhanced__description"
          data-testid="radioenhanced-description"
        >
          {description}
        </p>
      )}
    </div>
  )
}

RadioEnhanced.displayName = 'RadioEnhanced'
