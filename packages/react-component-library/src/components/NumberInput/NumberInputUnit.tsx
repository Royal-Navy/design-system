import React from 'react'

interface NumberInputUnitProps {
  offset: number
  unit: string
}

export const NumberInputUnit: React.FC<NumberInputUnitProps> = ({
  offset,
  unit,
}) => {
  if (!unit) {
    return null
  }

  return (
    <span
      className="rn-numberinput__unit"
      data-testid="number-input-unit"
      style={{ left: `${offset}px` }}
    >
      {unit}
    </span>
  )
}
