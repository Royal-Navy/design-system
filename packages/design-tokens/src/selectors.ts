import {
  getAnimation,
  getBreakpoint,
  getMediaQuery,
  getColor,
  getColorValue,
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
  colorValue: getColorValue,
  colorByMode: getColorByMode,
  themeColor: getThemeColor,
  fontSize: getTypography,
  shadow: getShadow,
  spacing: getSpacing,
  zIndex: getZIndex,
}
