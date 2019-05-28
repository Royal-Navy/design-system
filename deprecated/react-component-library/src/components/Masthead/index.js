import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Uuid from 'uuid'

class Masthead extends Component {
  static propTypes = {
    /** The content of the component */
    children: PropTypes.node,
    /** Specifies a custom classname for the compoennt */
    className: PropTypes.string,
    /** The title of the component */
    title: PropTypes.string,
    /** The links to use in the masthead */
    links: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    children: '',
    className: '',
    title: '',
    links: [],
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { title, className, links, children } = this.props
    return (
      <div className={`rn-masthead ${className}`}>
        <div className="rn-masthead__head">
          {title && <h4 className="rn-masthead__title">{title}</h4>}
          {children}
        </div>
        {links && (
          <nav className="rn-masthead__nav">
            {links.map(link => (
              <a
                className="rn-masthead__link h_mr-1"
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
