import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import { escape, unescape } from 'lodash'

class AutoSuggest extends React.Component {
  /**
   * This component is an implementation of react-autosuggest,
   * see https://www.npmjs.com/package/react-autosuggest
   * for full instructions on how to implement it.
   */

  static propTypes = {
    /** A list of suggestions in array format */
    suggestions: PropTypes.instanceOf(Array),
    /** If you don't want to filter on the 'label' key, you can specify a custom filter */
    filter: PropTypes.string,
    /** If you do not want to display the value of 'label' you can specify which value you want to render */
    renderedVal: PropTypes.string,
    /** You can specify any placeholder string you like */
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    suggestions: [],
    filter: 'label',
    renderedVal: 'label',
    placeholder: 'Begin typing...',
  }

  constructor(props) {
    super(props)
    this.filter = this.props.filter
    this.suggestions = this.props.suggestions
    this.renderedVal = this.props.renderedVal
    this.getSuggestions = value => {
      const escapedValue = escape(value.trim())

      if (escapedValue === '') {
        return []
      }

      const regex = new RegExp(`^${escapedValue}`, 'i')

      return this.suggestions.filter(suggestion =>
        regex.test(suggestion[this.filter])
      )
    }

    this.getSuggestionValue = suggestion => suggestion[this.filter]

    this.renderSuggestion = suggestion => (
      <span>{suggestion[this.renderedVal]}</span>
    )

    this.state = {
      value: '',
      suggestions: this.getSuggestions(''),
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  render() {
    const { value, suggestions } = this.state
    const { placeholder } = this.props
    const inputProps = {
      placeholder: unescape(placeholder),
      value,
      onChange: this.onChange,
    }

    /* Manually specify classees to use */
    const theme = {
      container: 'rn-autosuggest',
      containerOpen: 'rn-autosuggest open',
      input: 'rn-autosuggest__input',
      inputOpen: 'rn-autosuggest__input open',
      inputFocused: 'rn-autosuggest__input--focused',
      suggestionsContainer: 'rn-autosuggest__suggestions',
      suggestionsContainerOpen: 'rn-autosuggest__suggestions open',
      suggestionsList: 'rn-autosuggest__suggestions-list',
      suggestion: 'rn-autosuggest__suggestion',
      suggestionFirst: 'rn-autosuggest__suggestion--first',
      suggestionHighlighted: 'rn-autosuggest__suggestion--highlighted',
      sectionContainer: 'rn-autosuggest__section-container',
      sectionContainerFirst: 'rn-autosuggest__section-container--first',
      sectionTitle: 'rn-autosuggest__section-title',
    }

    return (
      <Autosuggest
        theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}

export default AutoSuggest
