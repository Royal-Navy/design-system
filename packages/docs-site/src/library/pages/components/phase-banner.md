---
title: Phase Banner
description:  A simple banner to indicate the phase of the project.
header: true
---

import { PhaseBanner, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import PhaseBannerComponent from '../../images/components/phase-banner/Component'
import PhaseBannerAnatomy from '../../images/components/phase-banner/Anatomy'

# Overview

The Phase Banner is an indicator that sits at the top of your application. It communicates the current phase of the project to show it is still being worked on.
<PhaseBannerComponent />

## Usage

<TabSet>

<Tab title="Design">

<SketchWidget name="PhaseBanner" href="/standards-toolkit.sketch" />

### Anatomy
<PhaseBannerAnatomy />

1. **Phase Badge**. The Phase Badge indicates the current phase to the user.
2. **Phase Message**. Accompanying message to provide additional information to the user.
3. **Container** The container is a wrapper that stretches to 100% of the viewport.

### Sizing & Spacing
The phase banner is a full-width component - it is designed to stretch to the size of the viewport. Try to keep the Phase Message concise.

### Hierarchy & Placement
There should be only one Phase Banner per page. It's placement should be at the top of the viewport, underneath the main Masthead.

</Tab>


<Tab title="Develop">
The banner should be used directly underneath the main site header before the content begins. If used without props then it will look exactly like the example image below (linking to `/feedback`), however it can be customised with any text or link that is required.

### Basic Usage
By default, passing a `label` and `href` will cause a regular anchor tag to be rendered for a Breadcrumb.

<CodeHighlighter source={`<PhaseBanner />`} language="javascript">
 <PhaseBanner />
</CodeHighlighter>

### Alternative text
You can pass custom markup to appear by including it as a child of the component.

<CodeHighlighter source={`<PhaseBanner>
  Custom html can go here. <strong>This part is in bold!</strong>
</PhaseBanner>`} language="javascript">
  <PhaseBanner>Custom html can go here. <strong>This part is in bold!</strong></PhaseBanner>
</CodeHighlighter>

### Properties
<DataTable caption="Link" data={[
  {
    Name: 'children',
    Type: 'React.Element',
    Required: 'False',
    Default: 'This is a new service, <a href=\"link\">Your feedback</a> will help to improve it',
    Description: 'HTML to display in the phase banner body',
  },
  {
    Name: 'link',
    Type: 'String',
    Required: 'False',
    Default: '/feedback',
    Description: 'The url to use with the default message',
  },
  {
    Name: 'phase',
    Type: 'String (alpha/beta)',
    Required: 'False',
    Default: 'alpha',
    Description: 'Text to display in the phase banner badge',
  },
  {
    Name: 'fullWidth',
    Type: 'Boolean',
    Required: 'False',
    Default: 'False',
    Description: 'Set to true if used in a full-width app with a sidebar and full-width masthead. Leave false if using in a container width-restricted layout.'
  }
]} />

</Tab>
</TabSet>
