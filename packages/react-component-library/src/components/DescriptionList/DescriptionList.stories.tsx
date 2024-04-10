import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'
import { DescriptionList, DescriptionListItem } from './index'

export default {
  component: DescriptionList,
  subcomponents: { DescriptionListItem },
  title: 'Components/Description List',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof DescriptionList>

const disableDefinitionList = {
  a11y: {
    config: {
      rules: storyAccessibilityConfig['Description List'],
    },
  },
}

export const Default: StoryFn<typeof DescriptionList> = (props) => (
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

export const Collapsible: StoryFn<typeof DescriptionList> = () => (
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

export const CollapsibleOpen: StoryFn<typeof DescriptionList> = () => (
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
