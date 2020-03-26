---
title: Progress Indicator
description: An animated indication that some form of network request or processing pending.
header: true
---

import { ProgressIndicator, Tab, TabSet } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

import ProgressIndicatorComponent from '../../images/components/progress-indicator/Component'
import ProgressIndicatorAnatomy from '../../images/components/progress-indicator/Anatomy'

# Overview

The Progress Indicator provides visual feedback to the user that an application is currently processing or retrieving data. Its purpose is to show that the application has not stalled - rather it is still running, however cannot update the UI with the newly requested or processed data.

<ProgressIndicatorComponent />

## Usage

The Progress Indicator should be used when processing or retrieving data. It should be used to convey a delay in the loading of data, indicating a network request may be taking longer than usual to complete.

<TabSet>
<Tab title="Design">

### Anatomy

<ProgressIndicatorAnatomy />

1. **Indicator Animation.** An SVG spinner that rotates to provide feedback to the user that the application is loading, rather than hung.
2. **Loading Label.** Accompanies the Indicator Animation to provide written context to the spinner.

### Hierarchy & Placement

The Progress Indicator can either be used as a full screen overlay, or within an individual component. Use the indicator full screen when the application is on first load. Individual components should have the progress indicator displayed when they are retrieving data, yet don't have anything to display yet.

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<ProgressIndicator />`} language="javascript" />

### Properties
<DataTable data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'CSS modifier class to add to the component',
  },
]} />

</Tab>
</TabSet>
