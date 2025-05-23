import { ComponentWithClass } from '../../common/ComponentWithClass'

import { SelectChildrenType } from './types'

export type OnChangeType = (value: string | null) => void
export type PopupPosition = 'above' | 'below' // | 'auto'

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
   * Toggles whether the list is open on first render.
   */
  initialIsOpen?: boolean
  /**
   * The initially selected item when the component is uncontrolled.
   */
  initialValue?: string | null
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
  onChange?: OnChangeType
  /**
   * The selected value when the component is controlled.
   */
  value?: string | null
  /**
   * Whether the dropdown should appear above or below the text
   */
  popupPosition?: PopupPosition
}
