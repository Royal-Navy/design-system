import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('SideNav', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => (
  <div class="rn-sidenav h_mb-4">
    <nav class="rn-sidenav__header">
      <a class="rn-sidenav__link h_mr-1" href="/">
        Home
      </a>
      <a class="rn-sidenav__link h_mr-1" href="/dashboard">
        Dashboard
      </a>
    </nav>
    <nav class="rn-sidenav__nav">
      <a class="rn-sidenav__link h_mr-1" href="/">
        Home
      </a>
      <a class="rn-sidenav__link h_mr-1" href="/dashboard">
        Dashboard
      </a>
      <a class="rn-sidenav__link h_mr-1" href="/settings">
        Settings
      </a>
    </nav>
  </div>
))
