import React from 'react'
import { color, spacing } from '@royalnavy/design-tokens'

import { Panel } from '../../../Panel'

export const LoremTextPanel = () => {
  return (
    <Panel>
      <p style={{ textAlign: 'justify', padding: spacing('4') }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{' '}
        <i>tempor incididunt ut labore et dolore magna</i> aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris
        <strong> nisi ut aliquip ex ea commodo </strong>. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.{' '}
        <span style={{ color: color('danger', '900') }}>
          Excepteur sint occaecat cupidatat
        </span>
        non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </Panel>
  )
}
