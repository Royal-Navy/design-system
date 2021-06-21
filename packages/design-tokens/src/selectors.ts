import {
  getAnimation,
  getBreakpoint,
  getMediaQuery,
  getColour,
  getShadow,
  getSpacing,
  getTypography,
  getZIndex,
} from './getters'
import { ThemeProps } from './types'

type OmitThemeProp<Args extends unknown[]> = Args[2] extends ThemeProps
  ? [Args[0], Args[1]]
  : [Args[0]]

/**
 * Detects whether or not to use a curried version of the getter,
 * enabling consumer to omit theme arg from selector for brevity:
 *
 * `color('neutral', '100', theme)` becomes `color('neutral', '100')`
 *
 * TODO: Make nesting work e.g. `rgba(color('neutral', '100'), 0.5)`
 *
 */
function createSelector<T extends (...args: any) => unknown>(getter: T) {
  function x(...args: OmitThemeProp<Parameters<T>>): ReturnType<T>
  function x(...args: Parameters<T>): ReturnType<T>
  function x(...args: Parameters<any>): unknown {
    if (args.length === getter.length) {
      return getter(...args)
    }

    return (props: ThemeProps) => getter(...args, props.theme)
  }

  return x
}

export default {
  mq: getMediaQuery,
  mediaQuery: getMediaQuery,
  breakpoint: getBreakpoint,
  animation: getAnimation,
  color: getColour,
  fontSize: getTypography,
  shadow: getShadow,
  spacing: getSpacing,
  zIndex: getZIndex,
}
