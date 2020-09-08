import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { DataList, DataListItem } from './index'

export default { component: DataList, title: 'DataList' } as Meta

const disableDefinitionList = {
  a11y: {
    config: {
      rules: [
        {
          id: 'definition-list',
          enabled: false,
        },
        {
          id: 'dlitem',
          enabled: false,
        },
      ],
    },
  },
}

export const Default = () => (
  <DataList title="Title">
    <DataListItem description="Name">Horatio Nelson</DataListItem>
    <DataListItem description="Age">44</DataListItem>
    <DataListItem description="Location">Portsmouth</DataListItem>
    <DataListItem description="Departure">2230</DataListItem>
    <DataListItem description="Water Temperature">25C</DataListItem>
    <DataListItem description="Wind Speed">8Kts</DataListItem>
  </DataList>
)
Default.parameters = disableDefinitionList
Default.storyName = 'Default'

export const Collapsible = () => (
  <DataList title="Title" isCollapsible>
    <DataListItem description="Name">Horatio Nelson</DataListItem>
    <DataListItem description="Age">44</DataListItem>
    <DataListItem description="Location">Portsmouth</DataListItem>
    <DataListItem description="Departure">2230</DataListItem>
    <DataListItem description="Water Temperature">25C</DataListItem>
    <DataListItem description="Wind Speed">8Kts</DataListItem>
  </DataList>
)
Collapsible.parameters = disableDefinitionList
Collapsible.storyName = 'Collapsible'
