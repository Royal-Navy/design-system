import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { accessibilityConfig } from '../../../.storybook/accessibilityConfig'
import { DescriptionList, DescriptionListItem } from './index'

export default {
  component: DescriptionList,
  subcomponents: { DescriptionListItem },
  title: 'Description List',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof DescriptionList>

const disableDefinitionList = {
  a11y: {
    config: {
      rules: accessibilityConfig['Description List'],
    },
  },
}

export const Default: ComponentStory<typeof DescriptionList> = (props) => (
  <DescriptionList {...props}>
    <DescriptionListItem title="Name">Horatio Nelson</DescriptionListItem>
    <DescriptionListItem title="Age">44</DescriptionListItem>
    <DescriptionListItem title="Location">Portsmouth</DescriptionListItem>
    <DescriptionListItem title="Departure">2230</DescriptionListItem>
    <DescriptionListItem title="Water Temperature">25C</DescriptionListItem>
    <DescriptionListItem title="Wind Speed">8Kts</DescriptionListItem>
  </DescriptionList>
)

Default.parameters = disableDefinitionList

Default.args = {
  description: 'Example description',
}

Default.storyName = 'Default'

export const Collapsible: ComponentStory<typeof DescriptionList> = () => (
  <DescriptionList description="Example description" isCollapsible>
    <DescriptionListItem title="Name">Horatio Nelson</DescriptionListItem>
    <DescriptionListItem title="Age">44</DescriptionListItem>
    <DescriptionListItem title="Location">Portsmouth</DescriptionListItem>
    <DescriptionListItem title="Departure">2230</DescriptionListItem>
    <DescriptionListItem title="Water Temperature">25C</DescriptionListItem>
    <DescriptionListItem title="Wind Speed">8Kts</DescriptionListItem>
  </DescriptionList>
)

Collapsible.parameters = disableDefinitionList

Collapsible.storyName = 'Collapsible'

export const CollapsibleOpen: ComponentStory<typeof DescriptionList> = () => (
  <DescriptionList description="Example description" isCollapsible isOpen>
    <DescriptionListItem title="Name">Horatio Nelson</DescriptionListItem>
    <DescriptionListItem title="Age">44</DescriptionListItem>
    <DescriptionListItem title="Location">Portsmouth</DescriptionListItem>
    <DescriptionListItem title="Departure">2230</DescriptionListItem>
    <DescriptionListItem title="Water Temperature">25C</DescriptionListItem>
    <DescriptionListItem title="Wind Speed">8Kts</DescriptionListItem>
  </DescriptionList>
)

CollapsibleOpen.parameters = disableDefinitionList

CollapsibleOpen.storyName = 'Collapsible (Open)'
