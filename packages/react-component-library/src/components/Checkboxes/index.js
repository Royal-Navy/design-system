import PropTypes from 'prop-types'
import React, { Component } from 'react'

import WithLegend from './WithLegend'
import WithoutLegend from './WithoutLegend'

function getOptionsWithState({ name, options, values }) {
  const result = options.map(option => ({
    ...option,
    name,
    checked: values.includes(option.value),
  }))
  return result
}

class Checkboxes extends Component {
  static propTypes = {
    /** The legend to display around the checkbox group */
    legend: PropTypes.string,
    /** The name of the checkbox group */
    name: PropTypes.string.isRequired,
    /** The action to perform when a checkbox is updated */
    onChange: PropTypes.func,
    /** The checkboxes within the group */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
      })
    ).isRequired,
    /** The values of the checkboxes within the group */
    values: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    legend: null,
    onChange: () => {},
    values: [],
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      values: props.values,
    }
  }

  onCheckboxChange = event => {
    const { name, value } = event.target
    const { values } = this.state
    let newValues

    if (values.includes(value)) {
      newValues = values.filter(item => item !== value)
    } else {
      newValues = [...values, value]
    }

    this.setState({ values: newValues })
    this.props.onChange({
      target: {
        name,
        value: newValues,
      },
    })
  }

  render() {
    const { values } = this.state
    const { legend, name, options } = this.props

    const optionsWithState = getOptionsWithState({ name, options, values })

    if (legend) {
      return (
        <WithLegend
          legend={legend}
          name={name}
          onChange={this.onCheckboxChange}
          optionsWithState={optionsWithState}
        />
      )
    }

    return (
      <WithoutLegend
        legend={legend}
        name={name}
        onChange={this.onCheckboxChange}
        optionsWithState={optionsWithState}
      />
    )
  }
}

export default Checkboxes
