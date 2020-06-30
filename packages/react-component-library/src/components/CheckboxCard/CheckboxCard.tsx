import React, { useRef } from 'react'

import { Checkbox, CheckboxProps } from '../Checkbox'

export interface CheckboxCardProps extends Omit<CheckboxProps, 'label'> {
  description?: string
  tabIndex?: number
  title: string
}

export const CheckboxCard: React.FC<CheckboxCardProps> = ({
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
      className="rn-checkbox-card"
      data-testid="checkboxcard-wrapper"
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
        <p
          className="rn-checkbox-card__description"
          data-testid="checkboxcard-description"
        >
          {description}
        </p>
      )}
    </div>
  )
}

CheckboxCard.displayName = 'CheckboxCard'
