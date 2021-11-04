import hexRgb from 'hex-rgb'

export function hexToRgb(color: string) {
  return hexRgb(color, { format: 'css' }).split(' ').join(', ')
}
