import hexRgb from 'hex-rgb'

export function hexToRgb(color) {
  return hexRgb(color, { format: 'css' }).split(' ').join(', ')
}
