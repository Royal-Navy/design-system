import React from 'react'
import { storiesOf } from '@storybook/react'

import { Breadcrumbs, BreadcrumbsItem  } from '.'
import { Link } from '../index'

const stories = storiesOf('Breadcrumbs', module)

stories.add('Default', () => (
  <Breadcrumbs>
    <BreadcrumbsItem link={<Link href="/">Home</Link>} />
    <BreadcrumbsItem link={<Link href="/components">Components</Link>} />
    <BreadcrumbsItem link={<Link href="/components/breadcrumb">Breadcrumb</Link>} />
  </Breadcrumbs>
))
