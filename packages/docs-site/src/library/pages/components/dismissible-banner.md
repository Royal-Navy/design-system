---
title: Dismissible Banner
description: todo
header: true
---

import DismissibleBannerComponent from '../../images/components/dismissible-banner/Component'
import DismissibleBannerAnatomy from '../../images/components/dismissible-banner/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/dismissible-banner--default" />
</div>

# Overview
The Dismissible Banner is a temporary banner that sits at the top of the page.

<DismissibleBannerComponent />

## Usage
The primary usage for the Dismissible Banner is to provide context and information to users, particularly for first time visitors. Once dismissed, it should remain hidden until its contents has been updated.

### Anatomy

<DismissibleBannerAnatomy />

### Sizing & Spacing
This component comes in one size only. It can resize to the width of its parent, however the component's height is dictated by its contents.

### Hierarchy & Placement
The Dismissible Banner should be placed at the top of the page content to ensure it is the first thing the user interacts with.
