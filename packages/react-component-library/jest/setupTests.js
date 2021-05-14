import 'babel-polyfill'
import 'jest-canvas-mock'
import 'jest-styled-components'
import { format } from 'util'

const originalConsoleError = global.console.error

global.console.error = (...args) => {
  const reactFailures = [/Failed prop type/, /Warning: /, /StrictMode/]

  if (reactFailures.some((p) => p.test(args[0]))) {
    originalConsoleError(...args)
    throw new Error(format(...args))
  }
}
