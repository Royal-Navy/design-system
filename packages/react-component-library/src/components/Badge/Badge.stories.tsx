import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from './index'

const stories = storiesOf('Badge', module)

stories.add('Faded', () => (
  <div>
    <Badge color="neutral" colorVariant="faded" size="regular">
      Neutral
    </Badge>
    <Badge color="primary" colorVariant="faded" size="regular">
      Primary
    </Badge>
    <Badge color="danger" colorVariant="faded" size="regular">
      Danger
    </Badge>
    <Badge color="warning" colorVariant="faded" size="regular">
      Warning
    </Badge>
    <Badge color="success" colorVariant="faded" size="regular">
      Success
    </Badge>
  </div>
))

stories.add('Solid', () => (
  <div>
    <Badge color="neutral" colorVariant="solid" size="regular">
      Neutral
    </Badge>
    <Badge color="primary" colorVariant="solid" size="regular">
      Primary
    </Badge>
    <Badge color="danger" colorVariant="solid" size="regular">
      Danger
    </Badge>
    <Badge color="warning" colorVariant="solid" size="regular">
      Warning
    </Badge>
    <Badge color="success" colorVariant="solid" size="regular">
      Success
    </Badge>
  </div>
))

stories.add('Sizes', () => (
  <div>
    <Badge color="neutral" colorVariant="faded" size="small">
      Small
    </Badge>
    <Badge color="neutral" colorVariant="faded" size="regular">
      Neutral
    </Badge>
    <Badge color="neutral" colorVariant="faded" size="large">
      Large
    </Badge>
    <Badge color="neutral" colorVariant="faded" size="xlarge">
      xLarge
    </Badge>
  </div>
))

stories.add('Pills', () => (
  <div>
    <Badge color="neutral" colorVariant="solid" size="regular" variant="pill">
      Neutral
    </Badge>
    <Badge color="primary" colorVariant="solid" size="regular" variant="pill">
      Primary
    </Badge>
    <Badge color="danger" colorVariant="solid" size="regular" variant="pill">
      danger
    </Badge>
    <Badge color="warning" colorVariant="solid" size="regular" variant="pill">
      warning
    </Badge>
    <Badge color="success" colorVariant="solid" size="regular" variant="pill">
      success
    </Badge>
  </div>
))
