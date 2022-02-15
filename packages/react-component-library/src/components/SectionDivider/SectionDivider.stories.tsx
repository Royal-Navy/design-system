import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SectionDivider } from './index'

export default {
  component: SectionDivider,
  title: 'Forms/Section Divider',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof SectionDivider>

const Template: ComponentStory<typeof SectionDivider> = (args) => (
  <SectionDivider {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Title = Template.bind({})
Title.args = {
  title: 'Section title',
}

export const Description = Template.bind({})
Description.args = {
  children:
    "She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time! Don't underestimate the Force.",
}

export const DescriptionTitle = Template.bind({})
DescriptionTitle.args = {
  title: 'Section title',
  children:
    "She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time! Don't underestimate the Force.",
}
DescriptionTitle.storyName = 'Title & Description'
