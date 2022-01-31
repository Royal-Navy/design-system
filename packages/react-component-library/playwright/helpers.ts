import { parseToRgb } from 'polished'

// Note: Importing 'hex-rgb' fails – this is an alternative

export function hexToRgb(color: string) {
  const parsed = parseToRgb(color)
  return `rgb(${parsed.red}, ${parsed.green}, ${parsed.blue})`
}
