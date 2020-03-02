import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import {
  Badge,
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
  BadgeColorType,
  BadgeSizeType,
} from '.'

const stories = storiesOf('Badge', module)
const fadedExamples = storiesOf('Badge/Examples/Faded', module)
const solidExamples = storiesOf('Badge/Examples/Solid', module)
const sizesExamples = storiesOf('Badge/Examples/Sizes', module)
const pillsExamples = storiesOf('Badge/Examples/Pills', module)

stories.addDecorator(withKnobs)

const badgeColorTextMap = {
  [BADGE_COLOR.ACTION]: 'Action',
  [BADGE_COLOR.DANGER]: 'Danger',
  [BADGE_COLOR.NEUTRAL]: 'Neutral',
  [BADGE_COLOR.SUCCESS]: 'Success',
  [BADGE_COLOR.WARNING]: 'Warning',
  [BADGE_COLOR.SUPA]: 'Sup A',
  [BADGE_COLOR.SUPB]: 'Sup B',
  [BADGE_COLOR.SUPC]: 'Sup C',
  [BADGE_COLOR.SUPD]: 'Sup D',
  [BADGE_COLOR.SUPE]: 'Sup E',
  [BADGE_COLOR.SUPF]: 'Sup F',
}

const badgeSizeTextMap = {
  [BADGE_SIZE.SMALL]: 'Small',
  [BADGE_SIZE.REGULAR]: 'Regular',
  [BADGE_SIZE.LARGE]: 'Large',
  [BADGE_SIZE.XLARGE]: 'XLarge',
}

stories.add('Default', () => <Badge>{text('Children', 'Badge')}</Badge>)

Object.keys(badgeColorTextMap).forEach(key => {
  fadedExamples.add(badgeColorTextMap[key], () => (
    <Badge
      color={key as BadgeColorType}
      colorVariant={BADGE_COLOR_VARIANT.FADED}
      size={BADGE_SIZE.REGULAR}
    >
      {badgeColorTextMap[key]}
    </Badge>
  ))
})

Object.keys(badgeColorTextMap).forEach(key => {
  solidExamples.add(badgeColorTextMap[key], () => (
    <Badge
      color={key as BadgeColorType}
      colorVariant={BADGE_COLOR_VARIANT.SOLID}
      size={BADGE_SIZE.REGULAR}
    >
      {badgeColorTextMap[key]}
    </Badge>
  ))
})

Object.keys(badgeSizeTextMap).forEach(key => {
  sizesExamples.add(badgeSizeTextMap[key], () => (
    <Badge
      color={BADGE_COLOR.NEUTRAL}
      colorVariant={BADGE_COLOR_VARIANT.SOLID}
      size={key as BadgeSizeType}
    >
      {badgeSizeTextMap[key]}
    </Badge>
  ))
})

Object.keys(badgeColorTextMap).forEach(key => {
  pillsExamples.add(badgeColorTextMap[key], () => (
    <Badge
      color={key as BadgeColorType}
      colorVariant={BADGE_COLOR_VARIANT.SOLID}
      size={BADGE_SIZE.REGULAR}
      variant={BADGE_VARIANT.PILL}
    >
      {badgeColorTextMap[key]}
    </Badge>
  ))
})
