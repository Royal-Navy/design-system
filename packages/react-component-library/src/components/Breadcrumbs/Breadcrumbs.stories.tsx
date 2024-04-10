import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Breadcrumbs, BreadcrumbsItem } from '.'
import { Link } from '../Link'

export default {
  component: Breadcrumbs,
  subcomponents: { BreadcrumbsItem },
  title: 'Components/Breadcrumbs',
} as Meta<typeof Breadcrumbs>

export const Default: StoryFn<typeof Breadcrumbs> = ({ className }) => (
  <Breadcrumbs className={className}>
    <BreadcrumbsItem link={<Link href="/">Home</Link>} />
    <BreadcrumbsItem href="/components">Components</BreadcrumbsItem>
    <BreadcrumbsItem
      link={<Link href="/components/breadcrumb">Breadcrumb</Link>}
    />
  </Breadcrumbs>
)
