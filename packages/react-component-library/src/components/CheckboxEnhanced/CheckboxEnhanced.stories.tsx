import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { CheckboxEnhanced } from '.'

const stories = storiesOf('CheckboxEnhanced', module)

stories.add('Default', () => {
  return (
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
          name="example1"
          title="My Label 1"
          value="true"
          isChecked
        />
        <CheckboxEnhanced name="example2" title="My Label 2" />
        <CheckboxEnhanced name="example3" title="My Label 3" />
        <CheckboxEnhanced name="example4" title="My Label 4" />
      </div>
    </form>
  )
})

stories.add('With description', () => {
  return (
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
          name="example1"
          title="My Label 1"
          value="true"
          isChecked
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <CheckboxEnhanced
          name="example2"
          title="My Label 2"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <CheckboxEnhanced
          name="example3"
          title="My Label 3"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <CheckboxEnhanced
          name="example4"
          title="My Label 4"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
      </div>
    </form>
  )
})
