---
title: Footer
description: Component to render content to go in the bottom of every page
---

## Usage
The `Footer` component renders the project logo and a default message and list of links. The message
and links can be overridden for the application using them as desired.

## Examples
<img src="images/footer.png" width="754px" />

```
<Footer />
```

Custom links and content

```
const links = [
  {
    Component: CustomLink,
    label: 'Privacy policy',
    to: '/privacy',
  },
  {
    Component: CustomLink,
    label: 'Contact',
    to: '/contact',
  },
  {
    Component: CustomLink,
    label: 'Feedback',
    to: '/feedback',
  },
]

<Footer links={links}>All code is the property of HM Royal Navy</Footer>
```


## Properties

| Name        | Type       | Required | Default | Description
| ---------   | ---------- | -------- | ------- | -----------
| links       | Array<any> | True     |         | An array of link items. See <a href="../Links/">Links</a> for more information |
| children    | ReactNode  | False    |         | Pass content to override the footer message as a sub component  |
