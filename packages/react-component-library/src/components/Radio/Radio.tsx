import React from 'react'

import { CheckboxRadioBase } from '../CheckboxRadioBase/CheckboxRadioBase'
import { CheckboxRadioBaseProps } from '../CheckboxRadioBase/CheckboxRadioBaseProps'
import { StyledRadio } from './partials/StyledRadio'
import { StyledCheckmark } from './partials/StyledCheckmark'
import { StyledCheckmarkWrapper } from './partials/StyledCheckmarkWrapper'

export type RadioProps = Omit<CheckboxRadioBaseProps, 'type' | 'partials'>

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    return (
      <CheckboxRadioBase
        type="radio"
        ref={ref}
        partials={{
          Root: StyledRadio,
          Checkmark: StyledCheckmark,
          CheckmarkWrapper: StyledCheckmarkWrapper,
        }}
        {...props}
      />
    )
  }
)

Radio.displayName = 'Radio'
