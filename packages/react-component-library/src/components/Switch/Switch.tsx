import React, { useState, useEffect } from 'react'

import { warnIfOverwriting, getKey } from '../../helpers'
import { SwitchOption, SwitchOptionProps } from '.'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledSwitch } from './partials/StyledSwitch'
import { StyledLegend } from './partials/StyledLegend'
import { StyledContainer } from './partials/StyledContainer'
import { ComponentSizeType, COMPONENT_SIZE } from '../Forms'
import { useExternalId } from '../../hooks/useExternalId'

export type SwitchChildType =
  | React.ReactElement<SwitchOptionProps>
  | React.ReactFragment
  | false
  | null
  | undefined

export interface SwitchProps extends ComponentWithClass, InputValidationProps {
  /**
   * HTML `name` attribute to apply to the component.
   */
  name: string
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
  value?: string
  /**
   * Optional label to display as HTML legend.
   */
  label?: string
  /**
   * Optional handler invoked when the selected value changes.
   */
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  /**
   * Size of the component.
   */
  size?: ComponentSizeType
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Collection of options to display within the Switch.
   */
  children: SwitchChildType | SwitchChildType[]
}

export const Switch: React.FC<SwitchProps> = ({
  name,
  value,
  label,
  onChange,
  size = COMPONENT_SIZE.FORMS,
  isDisabled,
  isInvalid,
  children,
  ...rest
}) => {
  const [active, setActive] = useState<string | undefined>()
  const id = useExternalId()

  useEffect(() => {
    setActive(value)
  }, [value])

  return (
    <StyledSwitch
      $size={size}
      $isDisabled={isDisabled}
      $isInvalid={isInvalid}
      {...rest}
      data-testid="switch"
    >
      {label && (
        <StyledLegend data-testid="switch-legend">{label}</StyledLegend>
      )}
      <StyledContainer>
        {React.Children.map(children, (child: SwitchChildType) => {
          if (!React.isValidElement(child)) {
            return null
          }

          warnIfOverwriting(child.props, 'name', SwitchOption.name)
          warnIfOverwriting(child.props, 'id', SwitchOption.name)
          warnIfOverwriting(child.props, 'isActive', SwitchOption.name)
          warnIfOverwriting(child.props, 'onChange', SwitchOption.name)

          if (isDisabled) {
            warnIfOverwriting(child.props, 'isDisabled', SwitchOption.name)
          }

          return React.cloneElement(child, {
            ...child.props,
            name,
            id,
            isDisabled: isDisabled || child.props.isDisabled,
            isActive: active === child.props.value,
            onChange: (e: React.FormEvent<HTMLInputElement>) => {
              setActive(child.props.value)

              if (onChange) {
                onChange(e)
              }
            },
            key: getKey('switch-option', child.props.label),
          })
        })}
      </StyledContainer>
    </StyledSwitch>
  )
}

Switch.displayName = 'Switch'
