import 'babel-polyfill'
import 'jest-canvas-mock'
import 'jest-styled-components'
import { format } from 'util'

const originalConsoleError = global.console.error

global.console.error = (...args) => {
  const blocked = [/Failed prop type/, /Warning: /, /StrictMode/]
  const allowed = [/act/]

  if (
    blocked.some((p) => p.test(args[0])) &&
    !allowed.some((p) => p.test(args[0]))
  ) {
    originalConsoleError(...args)
    throw new Error(format(...args))
  }
}
