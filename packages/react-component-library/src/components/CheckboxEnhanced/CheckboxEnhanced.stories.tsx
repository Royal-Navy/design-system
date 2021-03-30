import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import { CheckboxEnhanced } from '.'

export default {
  component: CheckboxEnhanced,
  title: 'Checkbox Enhanced',
} as Meta

export const Default = (props: any) => <CheckboxEnhanced {...props} />

Default.args = {
  id: undefined,
  name: 'default',
  title: 'Default checkbox enhanced',
  isChecked: true,
}

export const WithDescription = () => (
  <CheckboxEnhanced
    name="withdescription"
    title="With description"
    description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
  />
)

WithDescription.storyName = 'With description'

export const GridLayout = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault()
      action('Submitted')(e)
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
      <CheckboxEnhanced
        name="option1"
        title="Option 1"
        value="Option 1"
        isChecked
      />
      <CheckboxEnhanced name="option2" title="Option 2" value="Option 2" />
      <CheckboxEnhanced name="option3" title="Option 3" value="Option 3" />
      <CheckboxEnhanced name="option4" title="Option 4" value="Option 4" />
    </div>
  </form>
)

GridLayout.storyName = 'Grid layout'
