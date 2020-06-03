import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Field = ({ component: Component, name, form, ...rest }) => {
  const [value, setValue] = useState()

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = () => null

  const field = { value, onChange, onBlur, name }
  return <Component field={field} {...rest} form={form} />
}

Field.propTypes = {
  component: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  form: PropTypes.shape({
    errors: PropTypes.instanceOf(Object),
  }),
}

Field.defaultProps = {
  form: { errors: {}, touched: {} },
}

export default Field
