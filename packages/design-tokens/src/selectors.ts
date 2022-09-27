import {
  getAnimation,
  getBreakpoint,
  getMediaQuery,
  getColor,
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
  fontSize: getTypography,
  shadow: getShadow,
  spacing: getSpacing,
  zIndex: getZIndex,
}
