import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Breadcrumbs, BreadcrumbsItem } from '.'
import { Link } from '../Link'

export default {
  component: Breadcrumbs,
  subcomponents: { BreadcrumbsItem },
  title: 'Breadcrumbs',
} as Meta

export const Default = ({ className }: any) => (
  <Breadcrumbs className={className}>
    <BreadcrumbsItem link={<Link href="/">Home</Link>} />
    <BreadcrumbsItem link={<Link href="/components">Components</Link>} />
    <BreadcrumbsItem
      link={<Link href="/components/breadcrumb">Breadcrumb</Link>}
    />
  </Breadcrumbs>
)

Default.args = {
  className: '',
}
