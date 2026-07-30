import {
  IconFileDownload,
  IconFileUpload,
  IconMoveToInbox,
  IconSend,
} from '@royalnavy/icon-library'
import { Meta, StoryFn } from '@storybook/react-webpack5'
import React from 'react'

import { NAVIGATION_CARD_COLOR, NavigationCard } from '.'

export default {
  component: NavigationCard,
  title: 'Components/Navigation Card',
} as Meta<typeof NavigationCard>

export const Default: StoryFn<typeof NavigationCard> = (args) => (
  <NavigationCard {...args} />
)

Default.args = {
  link: <a href="#">Received files</a>,
  description: 'Browse and download all received files.',
  icon: <IconFileDownload />,
  color: NAVIGATION_CARD_COLOR.ACTION,
}

Default.argTypes = {
  color: {
    control: 'select',
    options: [...Object.values(NAVIGATION_CARD_COLOR)],
  },
}

export const WithoutIcon: StoryFn<typeof NavigationCard> = () => (
  <NavigationCard
    link={<a href="#">Inbound transfers</a>}
    description="Monitor files currently being received."
  />
)

export const Colours: StoryFn<typeof NavigationCard> = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
      gap: '24px',
    }}
  >
    <NavigationCard
      color={NAVIGATION_CARD_COLOR.ACTION}
      icon={<IconFileDownload />}
      link={<a href="#">Received files</a>}
      description="Browse and download all received files."
    />
    <NavigationCard
      color={NAVIGATION_CARD_COLOR.SUCCESS}
      icon={<IconFileUpload />}
      link={<a href="#">Upload files</a>}
      description="Add new files ready to send to a recipient."
    />
    <NavigationCard
      color={NAVIGATION_CARD_COLOR.WARNING}
      icon={<IconMoveToInbox />}
      link={<a href="#">Inbound transfers</a>}
      description="Monitor files currently being received."
    />
    <NavigationCard
      color={NAVIGATION_CARD_COLOR.DANGER}
      icon={<IconSend />}
      link={<a href="#">Files sent</a>}
      description="View a history of dispatched files."
    />
    <NavigationCard
      color={NAVIGATION_CARD_COLOR.NEUTRAL}
      icon={<IconMoveToInbox />}
      link={<a href="#">Outbound transfers</a>}
      description="Track files currently being sent."
    />
  </div>
)

Colours.parameters = {
  docs: {
    description: { story: 'A NavigationCard in each supported colour.' },
  },
}
