import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { Container } from '.'

const stories = storiesOf('Container', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => <Container>Arbitrary JSX</Container>)
