---
title: Sidebar (Deprecated)
description: An application sidebar with icons and indicators, fixed to the left of the screen.
header: true
---

import SidebarComponent from '../../images/components/sidebar/Component'
import SidebarAnatomy from '../../images/components/sidebar/Anatomy'
import SidebarStates from '../../images/components/sidebar/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/sidebar--default" />
</div>

# Overview
The Sidebar is a navigational component for NELSON applications. It is fixed to the left-hand of the screen and extends the full height of the browser. This component stays in place whilst the application scrolls, ensuring top navigational items are always within the user's reach.

<SidebarComponent />

## Usage
Only one Sidebar component should be used per page. It should contain your top level navigational items, not sub-navigational items/actions for a single page.

### Anatomy
<SidebarAnatomy />

The sidebar component has two main sections - the main navigational area at the top of the bar, and the fixed area at the bottom of the bar.

1. **Container**. This is a fixed width and places the component on the left-hand edge of the application.
2. **App Nav**. This section contains navigational items for the current application. This can be customised to meet the application's requirements.
3. **Indicators**. The Indicator sections are fixed throughout all **NELSON** applications. This section (optionally) contains a profile button and a notification sheet.

### Sizing & Spacing
The Sidebar is only available in one size. As this is a top-level component, customisation is limited (outside of link destinations).

### States
<SidebarStates />

The sidebar has two states - `collapsed` and `expanded`. By default, the sidebar is collapsed to the left of the screen. Hovering on any of the App Nav link icons will expand the sidebar to show the associated labels.

### Hierarchy & Placement
As the Sidebar is a top-level component, only one should be used per application. It is fixed to the left-hand edge of the application.
