import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { RadioEnhanced } from '.'

const stories = storiesOf('RadioEnhanced', module)

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
        <RadioEnhanced name="example" value="" title="My Label 1" />
        <RadioEnhanced name="example" value="" title="My Label 2" />
        <RadioEnhanced name="example" value="" title="My Label 3" />
        <RadioEnhanced name="example" value="" title="My Label 4" />
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
        <RadioEnhanced
          name="example"
          value=""
          title="My Label 1"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <RadioEnhanced
          name="example"
          value=""
          title="My Label 2"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <RadioEnhanced
          name="example"
          value=""
          title="My Label 3"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
        <RadioEnhanced
          name="example"
          value=""
          title="My Label 4"
          description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam."
        />
      </div>
    </form>
  )
})
