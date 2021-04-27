---
title: Breadcrumbs
description: The BreadcrumbsItem  component is a navigational item
header: true
---

import BreadcrumbComponent from '../../images/components/breadcrumbs/Component'
import BreadcrumbAnatomy from '../../images/components/breadcrumbs/Anatomy'
import BreadcrumbStates from '../../images/components/breadcrumbs/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/breadcrumbs--default" />
</div>

# Overview

The BreadcrumbsItem  component is a navigational item that allows users to quickly ascend a page tree.

<BreadcrumbComponent />

## Usage
The BreadcrumbsItem  component should sit at the top of the viewport. Visit the Design [Hierarchy & Placement](#hierarchy) section for more information.

## Anatomy
<BreadcrumbAnatomy />

1. **Parent Link**. The parent link is a clickable action that will navigate the user to the parent page.
2. **Current Page Label**. The current page is a label displaying the current page title. It is not clickable.

## Sizing & Spacing
The BreadcrumbsItem  component has one standard text size. Be careful with horizontal placement, as the BreadcrumbsItem  can take up a large amount of screen space displaying all the parent links.

## States
<BreadcrumbStates />

When hovering on a Breadcrumb, the active link will change to the primary colour. Every child to the right of the hovered link will fade to help indicate the target page to the user. 

## Hierarchy & Placement
There should only be one BreadcrumbsItem  component per page. It should sit at the top of the viewport and be easily accessible for the user. The component is a top level navigational item used to help the user navigate whole pages, rather than a subset section inside another component.
