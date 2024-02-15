import React from 'react'
import 'babel-polyfill'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import 'jest-styled-components'
import { format } from 'util'
import whyDidYouRender from '@welldone-software/why-did-you-render'

/**
 * Throw real errors for certain console errors
 *
 */
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

/**
 * Invoke `whyDidYouRender` for each Jest assertion
 *
 * - Set `Component.whyDidYouRender = true` property to enable for test suite
 * - Uncomment the custom notifier to see ALL component rerenders (inc valid)
 *
 */
let updateInfos = []

beforeAll(() => {
  whyDidYouRender(React, {
    // logOnDifferentValues: true,
    // notifier: (updateInfo) => updateInfos.push(updateInfo),
  })
})

beforeEach(() => {
  updateInfos = []
})

afterEach(() => {
  if (updateInfos.length > 0) {
    throw new Error(
      `Component rerenders:\n\n${JSON.stringify(updateInfos, null, 2)}`
    )
  }
})
