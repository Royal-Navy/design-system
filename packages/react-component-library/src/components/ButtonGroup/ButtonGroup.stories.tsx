import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { IconBrightnessLow } from '@royalnavy/icon-library'

import { ButtonGroup, ButtonGroupItem } from '.'
import { BUTTON_SIZE } from '..'

const stories = storiesOf('Button group', module)
const examples = storiesOf('Button group/Examples', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => (
  <ButtonGroup>
    <ButtonGroupItem onClick={action('Click One')}>One</ButtonGroupItem>
    <ButtonGroupItem onClick={action('Click Two')}>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
))

examples.add('Small', () => (
  <ButtonGroup size={BUTTON_SIZE.SMALL}>
    <ButtonGroupItem onClick={action('Click One')}>One</ButtonGroupItem>
    <ButtonGroupItem onClick={action('Click Two')}>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
))

examples.add('Large', () => (
  <ButtonGroup size={BUTTON_SIZE.LARGE}>
    <ButtonGroupItem onClick={action('Click One')}>One</ButtonGroupItem>
    <ButtonGroupItem onClick={action('Click Two')}>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
))

examples.add('XLarge', () => (
  <ButtonGroup size={BUTTON_SIZE.XLARGE}>
    <ButtonGroupItem onClick={action('Click One')}>One</ButtonGroupItem>
    <ButtonGroupItem onClick={action('Click Two')}>Two</ButtonGroupItem>
    <ButtonGroupItem isDisabled icon={<IconBrightnessLow />}>
      Three
    </ButtonGroupItem>
  </ButtonGroup>
))
