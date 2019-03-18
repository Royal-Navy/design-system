import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('Nav', module)

stories.addDecorator(withKnobs)

stories.add('Vertical', () => (
  <nav class="rn-nav vertical">
    <a class="rn-nav__item" href="http://testurl.test">
      Home
    </a>
    <a class="rn-nav__item" href="http://testurl.test">
      Link 1
    </a>
    <a class="rn-nav__item" href="http://testurl.test">
      Link 2
    </a>
    <a class="rn-nav__item" href="http://testurl.test">
      Link 3
    </a>
  </nav>
))

stories.add('Horizontal', () => (
  <nav class="rn-nav horizontal">
    <a class="rn-nav__item" href="http://testurl.test">
      Home
    </a>
    <a class="rn-nav__item" href="http://testurl.test">
      Link 1
    </a>
    <a class="rn-nav__item" href="http://testurl.test">
      Link 2
    </a>
    <a class="rn-nav__item" href="http://testurl.test">
      Link 3
    </a>
  </nav>
))
