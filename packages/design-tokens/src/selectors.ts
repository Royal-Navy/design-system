import {
  getAnimation,
  getBreakpoint,
  getMediaQuery,
  getColor,
  getColorValue,
  getShadow,
  getSpacing,
  getTypography,
  getZIndex,
} from './getters'

export default {
  mq: getMediaQuery,
  mediaQuery: getMediaQuery,
  breakpoint: getBreakpoint,
  animation: getAnimation,
  color: getColor,
  colorValue: getColorValue,
  fontSize: getTypography,
  shadow: getShadow,
  spacing: getSpacing,
  zIndex: getZIndex,
}
