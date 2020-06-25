import React, { useRef } from 'react'

import { Radio, RadioProps } from '../Radio'

export interface RadioCardProps extends Omit<RadioProps, 'label'> {
  description?: string
  tabIndex?: number
  title: string
}

export const RadioCard: React.FC<RadioCardProps> = ({
  description,
  isChecked,
  name,
  tabIndex = 0,
  title,
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
      className="rn-radio-card"
      data-testid="radiocard-wrapper"
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
          className="rn-radio-card__description"
          data-testid="radiocard-description"
        >
          {description}
        </p>
      )}
    </div>
  )
}

RadioCard.displayName = 'RadioCard'
