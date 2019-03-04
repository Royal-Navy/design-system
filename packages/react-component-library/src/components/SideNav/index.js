import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Uuid from 'uuid'

class Masthead extends Component {
  static propTypes = {
    /** Allows a custom classname to be specified */
    className: PropTypes.string,
    /** The links to use within the main body of the component */
    links: PropTypes.arrayOf(PropTypes.string),
    /** The links to use within the header section of the component */
    headerLinks: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    className: '',
    links: [],
    headerLinks: [],
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { className, links, headerLinks } = this.props
    return (
      <div className={`rn-sidenav ${className}`}>
        {headerLinks && (
          <nav className="rn-sidenav__header">
            {headerLinks.map(link => (
              <a
                className="rn-sidenav__link h_mr-1"
                href={link.to}
                key={Uuid(link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
        {links && (
          <nav className="rn-sidenav__nav">
            {links.map(link => (
              <a
                className="rn-sidenav__link h_mr-1"
                href={link.to}
                key={Uuid(link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    )
  }
}

export default Masthead
