import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const Modal = ({
  actionButtonText,
  children,
  onAction,
  onCancel,
  error,
  hideAction,
  hideCancel,
  title,
}) => (
  <div className={`rn-modal ${error}`}>
    <div className="window">
      <div className="header">
        {title && <h4 className="title">{title}</h4>}
      </div>
      <div className="content">{children}</div>

      <div className="footer">
        {!hideCancel && (
          <Button state="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        {!hideAction && error && (
          <Button onClick={onAction}>{actionButtonText}</Button>
        )}
        {!hideAction && !error && (
          <Button onClick={onAction}>{actionButtonText}</Button>
        )}
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  /** The text label for the action button */
  actionButtonText: PropTypes.string,
  /** The content of the component */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  /** The action to perform when the action button is pressed */
  onAction: PropTypes.func,
  /** The action to perform when the cancel button is pressed */
  onCancel: PropTypes.func,
  /** The message to display if there is an error */
  error: PropTypes.string,
  /** Allows the action button to be hidden */
  hideAction: PropTypes.bool,
  /** Allows the cancel button to be hidden */
  hideCancel: PropTypes.bool,
  /** The title of the modal */
  title: PropTypes.string,
}

Modal.defaultProps = {
  actionButtonText: 'OK',
  onAction: () => {},
  onCancel: () => {},
  error: null,
  hideAction: false,
  hideCancel: false,
  title: null,
}

export default Modal
