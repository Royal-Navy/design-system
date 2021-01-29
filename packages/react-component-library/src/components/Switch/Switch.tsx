import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { getKey } from '../../helpers'
import { SWITCH_SIZE } from '.'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledSwitch } from './partials/StyledSwitch'
import { StyledLegend } from './partials/StyledLegend'
import { StyledContainer } from './partials/StyledContainer'
import { StyledOption } from './partials/StyledOption'
import { SwitchInput } from './partials/SwitchInput'

function getActiveOption(options: SwitchOptionProps[], value: string) {
  const initial: SwitchOptionProps | string = options.find(
    (item) => item.value === value
  )

  return (initial && initial.label) || null
}

export type SwitchSizeType =
  | typeof SWITCH_SIZE.LARGE
  | typeof SWITCH_SIZE.SMALL
  | typeof SWITCH_SIZE.REGULAR

export interface SwitchOptionProps {
  label: string
  value: string
}

export interface SwitchProps extends ComponentWithClass, InputValidationProps {
  name: string
  value?: string
  label?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  options: SwitchOptionProps[]
  size?: SwitchSizeType
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  label,
  name,
  onChange,
  options = [],
  size = SWITCH_SIZE.REGULAR,
  value,
}) => {
  const [active, setActive] = useState(getActiveOption(options, value))
  const id = uuidv4()

  return (
    <StyledSwitch
      className={className}
      data-testid="switch-wrapper"
      $size={size}
    >
      {label && (
        <StyledLegend data-testid="switch-legend">{label}</StyledLegend>
      )}
      <StyledContainer>
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <StyledOption
            key={getKey('switch-option', optionLabel)}
            $isActive={active === optionLabel}
            htmlFor={`${id}-${optionLabel}`}
            data-testid="switch-option"
          >
            {optionLabel}
            <SwitchInput
              data-testid="switch-input"
              id={`${id}-${optionLabel}`}
              name={name || id}
              value={optionValue}
              type="radio"
              onClick={(event) => {
                setActive(optionLabel)
                onChange(event)
              }}
            />
          </StyledOption>
        ))}
      </StyledContainer>
    </StyledSwitch>
  )
}

Switch.displayName = 'Switch'
