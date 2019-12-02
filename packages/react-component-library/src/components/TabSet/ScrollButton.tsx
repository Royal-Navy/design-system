import React from 'react'
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
} from '@royalnavy/icon-library'
import classNames from 'classnames'

import { SCROLL_DIRECTION } from './constants'

interface ScrollButtonProps {
  direction: SCROLL_DIRECTION.LEFT | SCROLL_DIRECTION.RIGHT
  onClick: () => void
}

const SCROLL_DIRECTION_ICON_MAP = {
  [SCROLL_DIRECTION.LEFT]: <IconKeyboardArrowLeft />,
  [SCROLL_DIRECTION.RIGHT]: <IconKeyboardArrowRight />,
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction,
  onClick,
}) => {
  const classes = classNames(
    'rn-tab-set__scroll',
    `rn-tab-set__scroll--${direction}`
  )

  return (
    <button
      className={classes}
      onClick={onClick}
      data-testid={`scroll-${direction}`}
    >
      {SCROLL_DIRECTION_ICON_MAP[direction]}
    </button>
  )
}
