import React, { forwardRef, useRef, useState } from 'react'
import mergeRefs from 'react-merge-refs'
import { StyledToggle } from './partials/StyledToggle'
import { StyledOnIcon } from './partials/StyledOnIcon'
import { StyledOffIcon } from './partials/StyledOffIcon'
import { StyledLeftKnob } from './partials/StyledLeftKnob'
import { StyledRightKnob } from './partials/StyledRightKnob'
import { StyledInput } from '../CheckboxRadioBase/partials/StyledInput'
import { CheckboxRadioBaseProps } from '../CheckboxRadioBase/CheckboxRadioBaseProps'

export type ToggleProps = Omit<CheckboxRadioBaseProps, 'partials' | 'type'> & {
  OnIcon?: React.ElementType
  OffIcon?: React.ElementType
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      OnIcon,
      OffIcon,
      defaultChecked,
      id,
      name,
      value,
      onChange,
      onBlur,
      isDisabled = false,
      ...rest
    },
    ref
  ) => {
    const localRef = useRef<HTMLInputElement>(null)
    const isControlled = defaultChecked === undefined
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked)
      onChange?.(event)
    }

    const handleKeyUp = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        localRef.current?.click()
      }
    }

    return (
      <StyledToggle
        $isChecked={isChecked || false}
        $isDisabled={isDisabled}
        tabIndex={0}
        role="button"
        aria-pressed={defaultChecked}
        aria-label={defaultChecked ? 'Turn off' : 'Turn on'}
        data-testid="toggle"
        onKeyUp={handleKeyUp}
        {...rest}
      >
        <StyledRightKnob $isChecked={isChecked}>
          {OnIcon && (
            <StyledOnIcon $isChecked={isChecked}>
              <OnIcon size={24} />
            </StyledOnIcon>
          )}
        </StyledRightKnob>
        <StyledLeftKnob $isChecked={isChecked}>
          {OffIcon && (
            <StyledOffIcon $isChecked={isChecked}>
              <OffIcon size={24} />
            </StyledOffIcon>
          )}
        </StyledLeftKnob>
        <StyledInput
          defaultChecked={defaultChecked}
          ref={mergeRefs([localRef, ref])}
          id={id}
          type="checkbox"
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={isDisabled}
          data-testid="toggle-input"
          checked={isControlled ? isChecked : undefined}
          style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
          {...rest}
        />
      </StyledToggle>
    )
  }
)

Toggle.displayName = 'Toggle'
