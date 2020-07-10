---
title: Dismissible Banner
description: todo
header: true
---

import { DismissibleBanner } from '@royalnavy/react-component-library'

import { TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

import DismissibleBannerComponent from '../../images/components/dismissible-banner/Component'
import DismissibleBannerAnatomy from '../../images/components/dismissible-banner/Anatomy'

# Overview
The Dismissible Banner is a temporary banner that sits at the top of the page.

<DismissibleBannerComponent />

## Usage
The primary usage for the Dismissible Banner is to provide context and information to users, particularly for first time visitors. Once dismissed, it should remain hidden until its contents has been updated.

<TabSet>
<Tab title="Design">

### Anatomy

<DismissibleBannerAnatomy />

### Sizing & Spacing
This component comes in one size only. It can resize to the width of its parent, however the component's height is dictated by its contents.

### Hierarchy & Placement
The Dismissible Banner should be placed at the top of the page content to ensure it is the first thing the user interacts with.

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<DismissibleBanner onDismiss={(e, can) => console.log('result', e, can)}>
  <p>Some content</p>
</DismissibleBanner>`} language="javascript">
<DismissibleBanner onDismiss={(e, can) => console.log('result', e, can)}>
  <p>Some content</p>
</DismissibleBanner>
</CodeHighlighter>


### Dismissible Banner Properties
It is possible to compose a Dismissible banner with two sets of properties.
#### Dismissible Banner with heading and text content
<DataTable data={[
  {
    Name: 'hasCheckbox',
    Type: 'string',
    Required: 'False',
    Default: 'true',
    Description: 'If this is false then then the checkbox is not displayed',
  },
  {
    Name: 'children',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Content of the Dismissible Banner',
  },
  {
    Name: 'onDismiss',
    Type: '(event: React.FormEvent<HTMLButtonElement>, canShowAgain: boolean) => void',
    Required: 'True',
    Default: '',
    Description: 'Callback for when the button is clicked',
  },
  {
    Name: 'title',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Heading of the Dismissible Banner',
  },
]} />

#### Dismissible Banner with arbitrary content
<DataTable data={[
  {
    Name: 'hasCheckbox',
    Type: 'string',
    Required: 'False',
    Default: 'true',
    Description: 'If this is false then then the checkbox is not displayed',
  },
  {
    Name: 'children',
    Type: 'React.ReactElement',
    Required: 'True',
    Default: '',
    Description: 'Content of the Dismissible Banner',
  },
  {
    Name: 'onDismiss',
    Type: '(event: React.FormEvent<HTMLButtonElement>, canShowAgain: boolean) => void',
    Required: 'True',
    Default: '',
    Description: 'Callback for when the button is clicked',
  },
]} />

</Tab>
</TabSet>
