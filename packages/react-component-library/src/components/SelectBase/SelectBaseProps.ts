import { ComponentWithClass } from '../../common/ComponentWithClass'

import { SelectChildrenType } from './types'

export interface SelectBaseProps extends ComponentWithClass {
  /**
   * Collection of options to display within the Select.
   */
  children: SelectChildrenType
  /**
   * Optional HTML `id` attribute to apply to the component.
   */
  id?: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Toggles whether the component is invalid or not.
   */
  isInvalid?: boolean
  /**
   * Whether to hide the clear button.
   */
  hideClearButton?: boolean
  /**
   * Text label to display within the component.
   */
  label: string
  /**
   * Optional handler invoked when the selected value changes.
   */
  onChange?: (value: string | null) => void
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
  value?: string | null
}
