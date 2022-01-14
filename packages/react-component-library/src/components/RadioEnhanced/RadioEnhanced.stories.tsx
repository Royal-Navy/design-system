import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { RadioEnhanced } from '.'

export default {
  component: RadioEnhanced,
  title: 'Radio Enhanced',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof RadioEnhanced>

export const Default: ComponentStory<typeof RadioEnhanced> = (props) => (
  <RadioEnhanced {...props} />
)

Default.args = {
  id: undefined,
  name: 'default',
  title: 'Default radio enhanced',
  isChecked: true,
}

export const WithDescription: ComponentStory<typeof RadioEnhanced> = () => (
  <RadioEnhanced
    name="withdescription"
    title="With description"
    description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
  />
)

WithDescription.storyName = 'With description'

export const GridLayout: ComponentStory<typeof RadioEnhanced> = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault()
      action('onSubmit')(e)
    }}
  >
    <div
      style={{
        width: '44rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '1px 1px',
      }}
    >
      <RadioEnhanced
        name="option"
        title="Option 1"
        value="Option 1"
        isChecked
      />
      <RadioEnhanced name="option" title="Option 2" value="Option 2" />
      <RadioEnhanced name="option" title="Option 3" value="Option 3" />
      <RadioEnhanced name="option" title="Option 4" value="Option 4" />
    </div>
  </form>
)

GridLayout.storyName = 'Grid layout'
