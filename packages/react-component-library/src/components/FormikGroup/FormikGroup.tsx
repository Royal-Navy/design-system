import React from 'react'
import { useFormikContext } from 'formik'

import {
  FieldError,
  getError,
  transformErrorToAriaAttributes,
} from '../../enhancers'

interface FormikGroupProps extends ComponentWithClass {
  children: React.ReactElement[]
  label?: string
}

export const FormikGroup: React.FC<FormikGroupProps> = ({
  children,
  className,
  label,
}) => {
  const { errors, touched } = useFormikContext()
  const fieldName = children[0].props.name
  const error = getError(touched, errors, fieldName)

  return (
    <div className={className} data-testid="formik-group" role="group">
      {label && <legend data-testid="formik-group-legend">{label}</legend>}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, transformErrorToAriaAttributes(error))
      })}
      {error && (
        <FieldError id={error.id} data-testid="formik-group-error">
          {error.text}
        </FieldError>
      )}
    </div>
  )
}

FormikGroup.displayName = 'FormikGroup'
