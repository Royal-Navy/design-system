import { useEffect, useRef, useState } from 'react'
import { isFinite } from 'lodash'

import { UnitPosition } from './NumberInput'
import { UNIT_POSITION } from './constants'

const EXTRA_SPACING = 3

function getTextWidth({
  text,
  fontSize,
  fontFamily,
}: {
  text: string
  fontSize: string
  fontFamily: string
}) {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const context = canvas.getContext('2d')
  context.font = `${fontSize} ${fontFamily}`

  return context.measureText(text).width
}

function getInputProperties(element: Element, value: number) {
  const inputComputedStyle = window.getComputedStyle(element)
  const textWidth = getTextWidth({
    text: isFinite(value) ? value.toString() : '',
    fontSize: inputComputedStyle.getPropertyValue('font-size'),
    fontFamily: inputComputedStyle.getPropertyValue('font-family'),
  })
  const paddingLeft = parseInt(
    inputComputedStyle.getPropertyValue('padding-left'),
    10
  )

  return {
    textWidth,
    paddingLeft,
  }
}

export function useInputText(value: number, unitPosition: UnitPosition) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputOffset, setInputOffset] = useState<number>()
  const [unitOffset, setUnitOffset] = useState<number>()

  useEffect(() => {
    if (!unitPosition) return

    const { textWidth, paddingLeft } = getInputProperties(
      inputRef.current,
      value
    )

    if (unitPosition === UNIT_POSITION.AFTER) {
      const offset = textWidth + paddingLeft + EXTRA_SPACING
      setUnitOffset(Math.floor(offset))
    } else {
      setInputOffset(paddingLeft)
      setUnitOffset(paddingLeft)
    }
  }, [value])

  return { inputRef, inputOffset, unitOffset }
}
