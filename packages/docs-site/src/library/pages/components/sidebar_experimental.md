---
title: Sidebar (Experimental)
description: An application sidebar with icons and indicators, fixed to the left of the screen.
header: true
---

import SidebarEComponent from '../../images/components/sidebare/Component'
import SidebarEAnatomy from '../../images/components/sidebare/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/sidebar-experimental--default" />
</div>

# Overview

The Sidebar is a navigational component. It is fixed to the left-hand of the screen and extends the full height of the browser. This component stays in place whilst the application scrolls, ensuring top navigational items are always within the user's reach.

<SidebarEComponent />

## Usage

Only one Sidebar component should be used per page. It should contain your top level navigational items, not sub-navigational items/actions for a single page.

### Anatomy

<SidebarEAnatomy />

The sidebar component has two main sections - the main navigational area at the top of the bar, and the fixed area at the bottom of the bar.

1. **Collapse Toggle**. Toggles the sidebar between the collapsed and expanded views.
2. **Search (optional)**. Integrated search bar.
3. **Navigation Item**. The main navigational elements of the sidebar. Must contain at least two actions.
4. **Secondary Menu (optional)**. Optional menu to add additional functionality to navigation items.
5. **Secondary Menu Sheet**. Toggled when the Secondary Menu action is clicked.
6. **Notifications (optional)**. Displays any outstanding notifications for the user.
7. **User Account (optional)**. Contains information for the currently logged in user. Has a sub menu for profile links and logout actions.

### Sizing & Spacing

The Sidebar is only available in one size. As this is a top-level component, customisation is limited (outside of link destinations).

### Hierarchy & Placement

As the Sidebar is a top-level component, only one should be used per application. It is fixed to the left-hand edge of the application.
