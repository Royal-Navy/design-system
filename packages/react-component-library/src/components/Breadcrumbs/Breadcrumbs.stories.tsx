import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Breadcrumbs, BreadcrumbsItemProps, BreadcrumbsItem } from '.'
import { Link } from '../Link'
import { Nav } from '../../common/Nav'

export default {
  component: Breadcrumbs,
  subcomponents: { BreadcrumbsItem },
  title: 'Breadcrumbs',
} as Meta

export const Default: Story<Nav<BreadcrumbsItemProps>> = ({ className }) => (
  <Breadcrumbs className={className}>
    <BreadcrumbsItem link={<Link href="/">Home</Link>} />
    <BreadcrumbsItem link={<Link href="/components">Components</Link>} />
    <BreadcrumbsItem
      link={<Link href="/components/breadcrumb">Breadcrumb</Link>}
    />
  </Breadcrumbs>
)
