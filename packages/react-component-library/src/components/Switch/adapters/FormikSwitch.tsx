import React from 'react'
import { FormikProps, connect } from 'formik'

import FieldProps from '../../../types/FieldProps'
import FormProps from '../../../types/FormProps'

import { OptionType, SwitchType } from '../../../types/Switch'
import ResponsiveSwitch from '../index'
import Switch from '../Switch'

interface FormikSwitch extends SwitchType {
  field: FieldProps
  form: FormProps
  formik: FormikProps<any>
  responsive?: boolean
}

/**
 * Take an array of OptionType(s) and set the appropriate item
 * as active based on the Formik field value (`name:value`).
 *
 * @param options OptionType[]
 * @param active string
 */
function setActive(options: OptionType[], active: string) {
  return options.map(item => {
    const { name } = item

    return {
      ...item,
      active: name === active.split(':')[0],
    }
  })
}

const FormikSwitch: React.FC<FormikSwitch> = props => {
  const {
    field: { name },
    form: { touched, errors },
    formik: {
      setFieldValue,
      values: { [name]: active },
    },
    responsive,
    options,
    onChange,
  } = props

  const hasError: boolean = touched[name] && errors[name]

  const Component: ResponsiveSwitch | Switch = responsive
    ? ResponsiveSwitch
    : Switch

  function handleChange(previous: OptionType, active: OptionType) {
    setFieldValue(name, `${active.name}:${active.value}`)
    onChange(previous, active)
  }

  return (
    <>
      <Component
        {...props}
        label={name}
        options={setActive(options, active)}
        onChange={handleChange}
        className={hasError ? 'is-invalid' : ''}
      />
      {hasError && (
        <div className="rn-form__invalid-feedback" data-testid="error">
          {errors[name]}
        </div>
      )}
    </>
  )
}

export default connect(FormikSwitch)
