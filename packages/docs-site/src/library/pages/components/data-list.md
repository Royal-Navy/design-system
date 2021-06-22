---
title: Data List
description: A data list, with terms and descriptions.
header: true
---

import DataListComponent from '../../images/components/data-list/Component'
import DataListAnatomy from '../../images/components/data-list/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/data-list--default" />
</div>


# Overview

The Data List displays metadata and groups of descriptions in a "key: value" pair configuration.

<DataListComponent />

## Usage
The Data List should be used to display data-based information. It can also be set to be toggled between a collapsed and expanded state, saving screen real estate.

### Anatomy

<DataListAnatomy />

1. **Title**. Title for the entire Data List.
2. **List Item**. Individual Row of the Data List.
3. **Key**. Provides the Key for the key:value pair.
4. **Value**. The corresponding value of the declared Key.


