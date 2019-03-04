import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const Dialog = ({
  actionButtonText,
  children,
  clickAction,
  clickCancel,
  hideAction,
  hideCancel,
  error,
  title,
  state,
}) => (
  <div className={`rn-dialog ${state}`}>
    <div className="window">
      <div className="content">
        {title && <h4 className="title">{title}</h4>}
        {children}
      </div>

      <div className="footer">
        {!hideCancel && (
          <Button
            className="h_mr-2"
            state="neutral"
            type="tertiary"
            onClick={clickCancel}
          >
            Cancel
          </Button>
        )}
        {!hideAction && error && (
          <Button onClick={clickAction}>{actionButtonText}</Button>
        )}
        {!hideAction && !error && (
          <Button onClick="clickAction" state={state}>
            {actionButtonText}
          </Button>
        )}
      </div>
    </div>
  </div>
)

Dialog.propTypes = {
  actionButtonText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  clickAction: PropTypes.func,
  clickCancel: PropTypes.func,
  error: PropTypes.bool,
  hideAction: PropTypes.bool,
  hideCancel: PropTypes.bool,
  title: PropTypes.string,
  state: PropTypes.string,
}

Dialog.defaultProps = {
  actionButtonText: 'Action',
  clickAction: () => {},
  clickCancel: () => {},
  error: false,
  hideAction: false,
  hideCancel: false,
  title: null,
  state: 'neutral',
}

export default Dialog
