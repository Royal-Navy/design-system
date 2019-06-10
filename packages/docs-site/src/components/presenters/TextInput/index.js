import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextInput = props => {
  const {
    className,
    disabled,
    endAdornment,
    field: { value, name, onChange, onBlur },
    footnote,
    form: { errors, touched },
    id,
    label,
    placeholder,
    startAdornment,
    type,
    ...rest
  } = props

  const [focus, setFocus] = useState(false)

  const hasContent = value && value.length
  const hasError = touched[name] && errors[name]
  const hasLabel = label && label.length

  const classes = `rn-textinput
    ${focus ? 'rn-textinput--has-focus' : ''}
    ${hasContent ? 'rn-textinput--has-content' : ''}
    ${hasError ? 'rn-textinput--is-invalid' : ''}
    ${!hasLabel ? 'rn-textinput--no-label' : ''}
    ${className}
  `

  const onFocus = () => {
    setFocus(true)
  }

  const onLocalBlur = event => {
    setFocus(false)
    onBlur(event)
  }

  return (
    <div className={classes} data-testid="container">
      <div className="rn-textinput__outer-wrapper">
        {startAdornment && (
          <div
            className="rn-textinput__start-adornment"
            data-testid="start-adornment"
          >
            {startAdornment}
          </div>
        )}
        <div className="rn-textinput__input-wrapper" data-testid="inputwrapper">
          {hasLabel && (
            <label
              className="rn-textinput__label"
              data-testid="label"
              htmlFor={id}
            >
              {label}
            </label>
          )}
          <input
            className={`rn-textinput__input ${hasError ? 'is-invalid' : ''}`}
            data-testid="input"
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onLocalBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            type={type}
            value={value}
            {...rest}
          />
        </div>
        {endAdornment && (
          <div
            className="rn-textinput__end-adornment"
            data-testid="end-adornment"
          >
            {endAdornment}
          </div>
        )}
      </div>
      {footnote && (
        <small className="rn-textinput__footnote" data-testid="footnote">
          {footnote}
        </small>
      )}
      {hasError && (
        <div className="rn-textinput__invalid-feedback" data-testid="error">
          {errors[name]}
        </div>
      )}
    </div>
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  endAdornment: PropTypes.node,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }).isRequired,
  footnote: PropTypes.string,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
  type: PropTypes.string,
}

TextInput.defaultProps = {
  className: '',
  disabled: false,
  endAdornment: null,
  footnote: null,
  id: '',
  label: null,
  placeholder: null,
  startAdornment: null,
  type: 'text',
}

export default TextInput
