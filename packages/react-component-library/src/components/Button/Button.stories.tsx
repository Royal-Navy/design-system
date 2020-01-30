import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { Button, ButtonSizeType } from './index'
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT } from './constants'

const stories = storiesOf('Button', module)
const examples = storiesOf('Button/Examples', module)
const variantExamples = storiesOf('Button/Examples/Variants', module)
const dangerExamples = storiesOf('Button/Examples/Danger', module)
const defaultSizeExamples = storiesOf('Button/Examples/Sizes/Default', module)
const primarySizeExamples = storiesOf('Button/Examples/Sizes/Primary', module)
const secondarySizeExamples = storiesOf('Button/Examples/Sizes/Secondary', module)

stories.addDecorator(withKnobs)

const buttonSizeTextMap = {
  [BUTTON_SIZE.SMALL]: 'small',
  [BUTTON_SIZE.REGULAR]: 'regular',
  [BUTTON_SIZE.LARGE]: 'large',
  [BUTTON_SIZE.XLARGE]: 'xlarge',
}

stories.add('Default', () => <Button>{text('Children', 'Default')}</Button>)

variantExamples.add('Primary', () => (
  <Button onClick={action('Clicked primary')} variant={BUTTON_VARIANT.PRIMARY}>
    {text('Children', 'Default')}
  </Button>
))

variantExamples.add('Secondary', () => (
  <Button
    onClick={action('Clicked secondary')}
    variant={BUTTON_VARIANT.SECONDARY}
  >
    {text('Children', 'Default')}
  </Button>
))

variantExamples.add('Tertiary', () => (
  <Button
    onClick={action('Clicked tertiary')}
    variant={BUTTON_VARIANT.TERTIARY}
  >
    {text('Children', 'Default')}
  </Button>
))

dangerExamples.add('Primary', () => (
  <Button
    onClick={action('Clicked primary')}
    variant={BUTTON_VARIANT.PRIMARY}
    color={BUTTON_COLOR.DANGER}
  >
    {text('Children', 'Default')}
  </Button>
))

dangerExamples.add('Secondary', () => (
  <Button
    onClick={action('Clicked secondary')}
    variant={BUTTON_VARIANT.SECONDARY}
    color={BUTTON_COLOR.DANGER}
  >
    {text('Children', 'Default')}
  </Button>
))

dangerExamples.add('Tertiary', () => (
  <Button
    onClick={action('Clicked tertiary')}
    variant={BUTTON_VARIANT.TERTIARY}
    color={BUTTON_COLOR.DANGER}
  >
    {text('Children', 'Default')}
  </Button>
))

examples.add('Icons', () => (
  <>
    <Button
      variant="primary"
      onClick={action('Decreasing brightness')}
      icon={<IconBrightnessLow />}
    >
      Decrease Brightness
    </Button>
    <Button
      variant="primary"
      onClick={action('Increasing brightness')}
      icon={<IconBrightnessHigh />}
    >
      Increase Brightness
    </Button>
  </>
))

Object.keys(buttonSizeTextMap).forEach(key => {
  defaultSizeExamples.add(buttonSizeTextMap[key], () => (
    <Button
      onClick={action('Clicked')}
      size={key as ButtonSizeType}
    >
      {text('Children', 'Default')}
    </Button>
  ))
})

Object.keys(buttonSizeTextMap).forEach(key => {
  primarySizeExamples.add(buttonSizeTextMap[key], () => (
    <Button
      onClick={action('Clicked primary')}
      variant={BUTTON_VARIANT.PRIMARY}
      size={key as ButtonSizeType}
    >
      {text('Children', 'Default')}
    </Button>
  ))
})

Object.keys(buttonSizeTextMap).forEach(key => {
  secondarySizeExamples.add(buttonSizeTextMap[key], () => (
    <Button
      onClick={action('Clicked secondary')}
      variant={BUTTON_VARIANT.SECONDARY}
      size={key as ButtonSizeType}
    >
      {text('Children', 'Default')}
    </Button>
  ))
})
