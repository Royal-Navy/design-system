import selectors from './selectors'

export * from './types'
export * from './flat'

export { getTheme } from './getters'

export { selectors }

export { default as lightTheme } from './themes/light'
export { default as darkTheme } from './themes/dark'

const {
  animation,
  breakpoint,
  color,
  fontSize,
  mediaQuery,
  mq,
  shadow,
  spacing,
  zIndex,
} = selectors

export {
  animation,
  breakpoint,
  color,
  fontSize,
  mediaQuery,
  mq,
  shadow,
  spacing,
  zIndex,
}
