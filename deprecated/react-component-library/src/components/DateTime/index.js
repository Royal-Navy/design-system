import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

class DateTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
    }
    this.showTime = this.props.showTime
    this.onlyTime = this.props.onlyTime
    this.dateFormat = (() => {
      if (this.props.outputFormat !== 'MMM d, yyyy') {
        // An output format has been specified so use that
        return this.props.outputFormat
      }
      if (this.props.showTime) {
        if (this.props.onlyTime) {
          // only the time is being shown so only display that
          return `hh:MM aa`
        }
        // The default output format is being used so augment it with the time
        return `${this.props.outputFormat} h:MM aa`
      }
      return this.props.outputFormat
    })(props)
    this.timeIntervals = this.props.timeIntervals
    this.handleChange = this.handleChange.bind(this)
    this.minDate = this.props.minDate
    this.maxDate = this.props.maxDate
    this.disabled = this.props.disabled
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <DatePicker
        className="rn-datetime"
        disabled={this.props.disabled}
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect={this.showTime}
        showTimeSelectOnly={this.onlyTime}
        dateFormat={this.dateFormat}
        timeFormat="HH:MM"
        timeIntervals={this.timeIntervals}
        minDate={this.minDate}
        maxDate={this.maxDate}
      />
    )
  }
}

DateTime.propTypes = {
  /** If true, display the time selector and the time output */
  showTime: PropTypes.bool,
  /** Specifies the output format which will appear in the input box */
  outputFormat: PropTypes.string,
  /** Specifies the interval (in minutes) between times in the time picker */
  timeIntervals: PropTypes.number,
  /** Specifies the earliest date range selectable (see https://reactdatepicker.com/#example-13 for more information) */
  minDate: PropTypes.instanceOf(Date),
  /** Specifies the latest date range selectable (see https://reactdatepicker.com/#example-13 for more information) */
  maxDate: PropTypes.instanceOf(Date),
  /** If true the datepicker will be disabled */
  disabled: PropTypes.bool,
  /** If true then only the time picker will show */
  onlyTime: PropTypes.bool,
}

DateTime.defaultProps = {
  showTime: false,
  outputFormat: 'MMM d, yyyy',
  timeIntervals: 30,
  minDate: null,
  maxDate: null,
  disabled: false,
  onlyTime: false,
}

export default DateTime
