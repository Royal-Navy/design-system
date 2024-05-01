import React, { useRef, useEffect, HTMLProps } from 'react'

import { Checkbox } from '.'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'

export const IndeterminateCheckbox = ({
  indeterminate,
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate, rest.checked])

  return (
    <Checkbox
      ref={ref}
      variant={CHECKBOX_RADIO_VARIANT.NO_CONTAINER}
      {...rest}
    />
  )
}
