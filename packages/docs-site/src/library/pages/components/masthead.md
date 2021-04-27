---
title: Masthead
description: A top level section displayed at the top of the page.
header: true
---

import MastheadComponent from '../../images/components/masthead/Component'
import MastheadAnatomy from '../../images/components/masthead/Anatomy'
import MastheadStates from '../../images/components/masthead/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/masthead--default" />
</div>

# Overview
The Masthead is a simple section at the top of the page that allows the developer to communicate the service logo, user profile, notifications, and offer a search bar.

<MastheadComponent />

## Usage

The Masthead component is a main navigational component that resides at the top of an application. It is fixed in place and has a higher stacking order than the rest of the page, so content will flow underneath it on scroll. There should only be one Masthead component per page.

### Anatomy

<MastheadAnatomy />

1. **Container**. The Masthead Container wraps the entire Masthead and ensures it stays pinned to the top of the viewport.
2. **Search**. This button triggers the appearance of the Search Bar. When clicked, the page links in the Header.
3. **Notifications**. This icon displays to the user when they have an unread notification. Clicking on the icon will display the Notification Sheet.
4. **Profile**. This button links to the User's profile, including settings.
5. **App Nav**. Works similarly to the [Tabset](/components/tab-set/), allowing the user to quickly navigate between multiple application pages.

### States
Aside from the active page links (an example of these states is shown in the [Tabset Docs](/components/tab-set/)), the Masthead component only has two states. When the Search button is clicked in the top row of the Masthead, the page links are replaced with a full width search bar. Clicking on the Search button again will hide the bar.
<MastheadStates />
