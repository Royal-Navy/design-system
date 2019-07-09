import React from 'react'

interface PopoverProps {
  height?: number
  width?: number
  left?: number
  right?: number
  bottom?: number
  top?: number
}

const Popover: React.FC<PopoverProps> = ({
  children,
  height,
  width,
  left,
  right,
  top,
  bottom,
}) => {
  const style = {
    height,
    width,
    top,
    bottom,
    left,
    right,
  }

  return (
    <div className="rn-popover" style={style}>
      {children}
    </div>
  )
}

export default Popover
