import React from 'react'
import styled from 'styled-components'

import { Meta, StoryFn } from '@storybook/react'

import { IconWifi } from '@royalnavy/icon-library'
import { spacing } from '@royalnavy/design-tokens'

import { Button, ButtonProps } from './index'
import { BUTTON_ICON_POSITION, BUTTON_VARIANT } from './constants'
import { SectionDivider } from '../SectionDivider'
import { COMPONENT_SIZE } from '../Forms'

export default {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: Button,
  title: 'Components/Button',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

const StyledButtonStrip = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: start;
  gap: ${spacing('4')};
  padding: ${spacing('4')} 0;
`

type ButtonStripArgs = ButtonProps & {
  title?: string
  hideText?: boolean
  hideNoContainer?: boolean
}

const ButtonStrip = (args: ButtonStripArgs) => {
  const localArgs = { ...args }
  const shouldHideButtonText = !!args.hideText
  const shouldDisplayNoContainerButton = !args.hideNoContainer
  delete localArgs.variant
  delete localArgs.isDisabled
  const disabledStates = [false, true]

  return (
    <>
      <SectionDivider title={args.title} />
      {disabledStates.map((state) => (
        <StyledButtonStrip key={`disabled:${state}`}>
          <Button
            variant={BUTTON_VARIANT.PRIMARY}
            isDisabled={state}
            {...localArgs}
          >
            {shouldHideButtonText ? '' : 'Primary button'}
          </Button>
          <Button
            variant={BUTTON_VARIANT.SECONDARY}
            isDisabled={state}
            {...localArgs}
          >
            {shouldHideButtonText ? '' : 'Secondary button'}
          </Button>
          <Button
            variant={BUTTON_VARIANT.TERTIARY}
            isDisabled={state}
            {...localArgs}
          >
            {shouldHideButtonText ? '' : 'Tertiary button'}
          </Button>
          {shouldDisplayNoContainerButton && (
            <Button
              variant={BUTTON_VARIANT.NO_CONTAINER}
              isDisabled={state}
              {...localArgs}
            >
              {shouldHideButtonText ? '' : 'No container button'}
            </Button>
          )}
          <Button
            variant={BUTTON_VARIANT.DANGER}
            isDisabled={state}
            {...localArgs}
          >
            {shouldHideButtonText ? '' : 'Danger button'}
          </Button>
        </StyledButtonStrip>
      ))}

      <hr />
    </>
  )
}

export const RegularButtons: StoryFn<typeof Button> = (args) => {
  const iconLeftArgs = {
    ...args,
    icon: <IconWifi />,
    iconPosition: BUTTON_ICON_POSITION.LEFT,
  }
  const iconRightArgs = {
    ...iconLeftArgs,
    iconPosition: BUTTON_ICON_POSITION.RIGHT,
  }
  const loadingArgs = {
    ...args,
    isLoading: true,
  }

  const iconOnlyArgs = {
    ...iconLeftArgs,
    showText: false,
  }

  return (
    <>
      <ButtonStrip {...args} title="Default" hideNoContainer />
      <ButtonStrip {...iconLeftArgs} title="With icons left" />
      <ButtonStrip {...iconRightArgs} title="With icons right" />
      <ButtonStrip {...iconOnlyArgs} title="Icon only" hideText />
      <ButtonStrip {...loadingArgs} title="Loading" hideNoContainer />
    </>
  )
}

const paletteArgTypes = {
  isDisabled: { table: { disable: true } },
  isLoading: {
    control: 'boolean',
  },
  size: { table: { disable: true } },
  icon: { table: { disable: true } },
  variant: { table: { disable: true } },
  iconPosition: { table: { disable: true } },
  type: { table: { disable: true } },
}

RegularButtons.argTypes = paletteArgTypes
RegularButtons.args = {
  size: COMPONENT_SIZE.FORMS,
}

export const SmallButtons = RegularButtons.bind({})
SmallButtons.argTypes = paletteArgTypes
SmallButtons.args = {
  size: COMPONENT_SIZE.SMALL,
}
