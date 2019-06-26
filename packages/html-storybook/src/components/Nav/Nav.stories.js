import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('Nav', module)

stories.addDecorator(withKnobs)

stories.add('Vertical', () => (
  <nav className="rn-nav vertical">
    <a className="rn-nav__item" href="http://testurl.test">
      Home
    </a>
    <a className="rn-nav__item" href="http://testurl.test">
      Link 1
    </a>
    <a className="rn-nav__item" href="http://testurl.test">
      Link 2
    </a>
    <a className="rn-nav__item" href="http://testurl.test">
      Link 3
    </a>
  </nav>
))

stories.add('Horizontal', () => (
  <nav className="rn-nav horizontal">
    <a className="rn-nav__item" href="http://testurl.test">
      Home
    </a>
    <a className="rn-nav__item" href="http://testurl.test">
      Link 1
    </a>
    <a className="rn-nav__item" href="http://testurl.test">
      Link 2
    </a>
    <a className="rn-nav__item" href="http://testurl.test">
      Link 3
    </a>
  </nav>
))
