---
title: Table
description: Display tabular data.
header: true
---

import TableComponent from '../../images/components/table/Component'
import TableAnatomy from '../../images/components/table/Anatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/table--default" />
</div>

# Overview

The Table component is used to display tabular data. Each row is presented in the same format. It makes information eas ier to compare and scan.

<TableComponent />

## Usage
The Table component is best used to compare information in rows and columns. It organises data, making it easier for users to interpret by looking for patterns and insights. By default, the Table simply renders data passed to it, however it can be enhanced to include features such as Column Sorting.

### Anatomy
<TableAnatomy />

1. **Table Container**. Wraps the entire Table component. By default it has no border styles, ensuring it sits flush with its immediate parent.
2. **Table Header**. Contains the column titles.
3. **Table Column**. Each Table Column contains data for each Table Row.
4. **Column Sorting (Optional)**. The Table Column can optionally have sorting applied to it, giving the user the ability to reorder the columns.

### Sizing & Spacing
The Table component adapts to the data and content placed inside of it. By default, the Table will extend the full width of its parent.

### Hierarchy & Placement
Whilst there is no restriction on the number of Table instances that can be used per page, it's always worth exploring if there is a more informative or interactive way of displaying this data to the user.
