---
title: Pagination
description: Navigate between muitple pages of records.
header: true
---

import PaginationComponent from '../../images/components/pagination/Component'
import PaginationAnatomy from '../../images/components/pagination/Anatomy'
import PaginationStates from '../../images/components/pagination/States'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/pagination--default" />
</div>

# Overview

The Pagination component shows a series of related content split across multiple pages. It allows an end user to navigate between these pages of records.
<PaginationComponent />

## Usage
The Pagination component is best used for large lists and tables.

### Anatomy
<PaginationAnatomy />

1. **Page Action**. This allows the user to quickly jump to a specific page of records.
2. **Prev/Next**. These buttons move the page number by +/-1.

### Sizing & Spacing
The Pagination component is of fixed size. 

### States (if applicable) 
<PaginationStates />

Multiple sub-components of the Pagination component have many different states. The Page Action buttons have `default`, `hover`, and `active` states, whereas the Prev/Next buttons have default and hover.

### Hierarchy & Placement
The Pagination component should be placed above and below a table or list and aligned to the right-hand side. Do not nest the Pagination component. If another level is required, direct the user to a new page.
