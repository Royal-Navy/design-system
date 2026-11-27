import React from 'react'

import { InputValidationProps } from '../../common/InputValidationProps'
import { ComponentSizeType, COMPONENT_SIZE } from '../Forms'
import { StyledInput } from './partials/StyledInput'
import { StyledLabel } from './partials/StyledLabel'
import { StyledToggle } from './partials/StyledToggle'
import { StyledTrack } from './partials/StyledTrack'

interface ToggleBaseProps
  extends InputValidationProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'children' | 'disabled' | 'role' | 'size' | 'type'
    > {
  /**
   * Toggles whether the component is on (controlled).
   */
  checked?: boolean
  /**
   * Toggles whether the component is initially on (uncontrolled).
   */
  defaultChecked?: boolean
  /**
   * Optional unique ID to apply to the input.
   */
  id?: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Denotes that the component is invalid. Colour alone shows this, so pair
   * it with an error message, e.g. by wrapping the component in `Field`.
   */
  isInvalid?: boolean
  /**
   * HTML `name` attribute associated with the input.
   */
  name?: string
  /**
   * Optional handler invoked when the component is switched on or off.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  /**
   * Size of the component.
   */
  size?: ComponentSizeType
}

type ToggleLabelProps =
  | {
      /**
       * Label to display to the right of the component. Provide an
       * `aria-label` or `aria-labelledby` if omitted.
       */
      label: string
    }
  | { label?: never; 'aria-label': string }
  | { label?: never; 'aria-labelledby': string }

export type ToggleProps = ToggleBaseProps & ToggleLabelProps

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      isDisabled,
      isInvalid,
      label,
      size = COMPONENT_SIZE.FORMS,
      ...rest
    },
    ref
  ) => (
    <StyledToggle className={className} data-testid="toggle">
      <StyledInput
        aria-invalid={isInvalid || undefined}
        data-testid="toggle-input"
        {...rest}
        ref={ref}
        type="checkbox"
        role="switch"
        disabled={isDisabled}
      />
      <StyledTrack $size={size} data-testid="toggle-track" />
      {label && (
        <StyledLabel $size={size} data-testid="toggle-label">
          {label}
        </StyledLabel>
      )}
    </StyledToggle>
  )
)

Toggle.displayName = 'Toggle'
