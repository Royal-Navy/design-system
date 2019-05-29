import React from 'react'
import { storiesOf } from '@storybook/react'

import CustomLink from '../CustomLink'
import Links from './index'

const links = [
  {
    href: '/privacy',
    label: 'Privacy policy',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/feedback',
    label: 'Feedback',
  },
]

const stories = storiesOf('Links', module)

stories.add('Default', () => (
  <div>
    Small
    <br />
    <Links size="small" links={links} />
    <hr />
    Regular
    <br />
    <Links links={links} />
  </div>
))

const customLinks = links.map(item => ({
  Component: CustomLink,
  label: item.label,
  to: item.href,
}))

stories.add('Custom render component', () => <Links links={customLinks} />)
