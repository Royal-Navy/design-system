---
title: Phase Banner
description:  A simple banner to indicate the phase of the project.
header: true
---

import PhaseBannerComponent from '../../images/components/phase-banner/Component'
import PhaseBannerAnatomy from '../../images/components/phase-banner/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/phase-banner--default" />
</div>

# Overview

The Phase Banner is an indicator that sits at the top of your application. It communicates the current phase of the project to show it is still being worked on.
<PhaseBannerComponent />

## Usage

### Anatomy
<PhaseBannerAnatomy />

1. **Phase Badge**. The Phase Badge indicates the current phase to the user.
2. **Phase Message**. Accompanying message to provide additional information to the user.
3. **Container** The container is a wrapper that stretches to 100% of the viewport.

### Sizing & Spacing
The phase banner is a full-width component - it is designed to stretch to the size of the viewport. Try to keep the Phase Message concise.

### Hierarchy & Placement
There should be only one Phase Banner per page. It's placement should be at the top of the viewport, underneath the main Masthead.
