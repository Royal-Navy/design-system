import React, { useState } from 'react'

interface SwitchProps {
  className?: string
}

const Switch: React.FC<SwitchProps> = ({ className = '' }) => {
  return <article className="rn-switch"></article>
}

Switch.displayName = 'Switch'

export default Switch
