import { parseToRgb } from 'polished'

export function hexToRgb(color: string) {
  const parsed = parseToRgb(color)
  return `rgb(${parsed.red}, ${parsed.green}, ${parsed.blue})`
}
