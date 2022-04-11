import React from 'react'

import { CheckboxRadioBase, CheckboxRadioBaseProps } from '../CheckboxRadioBase'
import { StyledCheckbox } from './partials/StyledCheckbox'
import { StyledCheckmark } from './partials/StyledCheckmark'
import { StyledCheckmarkWrapper } from './partials/StyledCheckmarkWrapper'

export type CheckboxProps = Omit<CheckboxRadioBaseProps, 'type' | 'partials'>

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
