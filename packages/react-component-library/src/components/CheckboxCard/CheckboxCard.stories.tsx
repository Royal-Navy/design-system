import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { CheckboxCard } from '.'

const stories = storiesOf('CheckboxCard', module)

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
        <CheckboxCard
          name="example1"
          title="My Label 1"
          value="true"
          isChecked
        />
        <CheckboxCard name="example2" title="My Label 2" />
        <CheckboxCard name="example3" title="My Label 3" />
        <CheckboxCard name="example4" title="My Label 4" />
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
        <CheckboxCard
          name="example1"
          title="My Label 1"
          value="true"
          isChecked
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <CheckboxCard
          name="example2"
          title="My Label 2"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <CheckboxCard
          name="example3"
          title="My Label 3"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <CheckboxCard
          name="example4"
          title="My Label 4"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
      </div>
    </form>
  )
})
