import React from 'react'
import { storiesOf } from '@storybook/react'

import Breadcrumbs from './index'

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/components/breadcrumb',
    label: 'Breadcrumb',
  },
]

const stories = storiesOf('Breadcrumbs', module)

stories.add('Default', () => <Breadcrumbs links={links} />)
