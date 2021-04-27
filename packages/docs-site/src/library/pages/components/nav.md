---
title: Nav
description: A horizontal or vertical navigation component that supports nesting.
header: true
---

import NavComponent from '../../images/components/nav/Component'
import NavAnatomy from '../../images/components/nav/Anatomy'
import NavStates from '../../images/components/nav/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/nav--default" />
</div>

# Overview

The Nav component is built to provide a list of navigation links to help people move around a website or application. Navigation links can either be listed vertically or horizontally. Horizontal links will change to vertical on tablet and mobile devices.

Navigation can also be created in different sizes.

In some cases navigation can be combined with other elements. One example of this is a site which uses a large horizontal navigation as its primary navigation method and then hides that navigation when it switches to vertical.

The component provides styling for focus, active and hover. The styles for navigation items is nearly identical to Buttons, to keep a consistent look and feel.

The url provided to a navigation link will be used as the 'to' property of a react router link.

<NavComponent />

## Usage

### Anatomy  

<NavAnatomy />

1. **Container**. The Nav component is wrapped in an invisible container. This allows it to be placed inside larger composite components without breaking their visual look.
2. **Link**. The Nav links can either be applied vertically or horizontally. These will automatically switch to vertical on Mobile devices to ensure they fit on the screen.

### States

<NavStates />

The Nav Links have three states - `default`, `hover`, and `active`.

### Hierarchy & Placement
The Nav component can be used to link to both top level pages and sub-pages. Try to keep all the links in the same navigation at the same page level. This makes the mental model of your application structure easier to process for the user.
