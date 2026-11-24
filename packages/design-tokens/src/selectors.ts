import {
  getAnimation,
  getBreakpoint,
  getMediaQuery,
  getColor,
  getColorByMode,
  getThemeColor,
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
  colorByMode: getColorByMode,
  themeColor: getThemeColor,
  fontSize: getTypography,
  shadow: getShadow,
  spacing: getSpacing,
  zIndex: getZIndex,
}
