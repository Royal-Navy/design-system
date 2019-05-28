import React from 'react'
import { storiesOf } from '@storybook/react'

import CustomLink from '../CustomLink'
import Footer from './index'

const stories = storiesOf('Footer', module)

stories.add('Default', () => <Footer />)

const links = [
  {
    Component: CustomLink,
    label: 'Privacy policy',
    to: '/privacy',
  },
  {
    Component: CustomLink,
    label: 'Contact',
    to: '/contact',
  },
  {
    Component: CustomLink,
    label: 'Feedback',
    to: '/feedback',
  },
]

stories.add('Custom links and content', () => (
  <Footer links={links}>All code is the property of HM Royal Navy</Footer>
))
