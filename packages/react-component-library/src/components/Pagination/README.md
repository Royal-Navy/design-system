---
title: Pagination
description: Navigate between muitple pages of records.
---

## Usage
The `Pagination` component allows an end user to navigate between pages of records.

## Examples

<img src="images/pagination.png" />

```
  <Pagination
    onChangeCallback={(currentPage, totalPages) => {
      console.log(currentPage, totalPages)
    }}
    pageSize={10}
    total={1000}
  />
```

## Properties
### Pagination

| Name             | Type          | Requied | Default | Description                                                  |
|------------------|---------------|---------|---------|--------------------------------------------------------------|
| onChangeCallback | Function<any> | False   |         | A callback function invoked when the current page is changed |
| pageSize         | Number        | False   | 10      | The number of records to display per page                    |
| total            | Number        | True    |         | The total number of records to paginate                      |
