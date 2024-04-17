import React from 'react'

import { CheckboxRadioBase } from '../CheckboxRadioBase/CheckboxRadioBase'
import { CheckboxRadioBaseProps } from '../CheckboxRadioBase/CheckboxRadioBaseProps'
import { StyledCheckbox } from './partials/StyledCheckbox'
import { StyledCheckmark } from './partials/StyledCheckmark'
import { StyledCheckmarkWrapper } from './partials/StyledCheckmarkWrapper'

export type CheckboxProps = Omit<
  CheckboxRadioBaseProps,
  'type' | 'partials'
> & {
  indeterminate?: boolean
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return (
      <CheckboxRadioBase
        type="checkbox"
        ref={ref}
        partials={{
          Root: StyledCheckbox,
          Checkmark: StyledCheckmark,
          CheckmarkWrapper: StyledCheckmarkWrapper,
        }}
        {...props}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'
