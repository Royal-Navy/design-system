import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { CheckboxRadioVariantType } from './types'

export interface CheckboxRootProps extends React.HTMLAttributes<HTMLElement> {
  $hasContainer?: boolean
  $isDisabled?: boolean
  $isInvalid?: boolean
  $isChecked?: boolean
  className?: string
}

export interface CheckmarkProps {
  $hasContainer?: boolean
}

export interface CheckboxRadioBaseProps
  extends ComponentWithClass,
    InputValidationProps {
  /**
   * Optional unique ID to apply to the component.
   */
  id?: string
  /**
   * Toggles whether or not the component is marked as checked by default.
   */
  defaultChecked?: boolean
  /**
   * Optional description to display below the label.
   */
  description?: React.ReactNode
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Label to display to the right of the component.
   */
  label: string
  /**
   * HTML `name` attribute associated with the component.
   */
  name: string
  /**
   * Optional handler to be invoked when the value of the component changes.
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  /**
   * Optional handler to be invoked when the blur event is emitted.
   */
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  /**
   * Optional HTML `value` attribute associated with the component.
   */
  value?: string
  /**
   * Optional variant to set container visibility.
   */
  variant?: CheckboxRadioVariantType
  /**
   * HTML `type` attribute associated with the input (Checkbox or Radio).
   */
  type: 'checkbox' | 'radio'
  /**
   * Custom implementations of presentational styled-components.
   */
  partials: {
    Root: React.ComponentType<CheckboxRootProps>
    Checkmark: React.ComponentType<CheckmarkProps>
  }
}
