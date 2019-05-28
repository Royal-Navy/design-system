---
title: Nav
description: Navigation components to buid vertial and horizontal menus
---

## Types and usage

The Nav component is built to provide a list of navigation links
to help people move around a website or application. Navigation
links can either be listed vertically or horizontally. Horizontal
links will change to vertical on tablet and mobile devices.

Navigation can also be created in different sizes.

In some cases navigation can be combined with other elements. One
example of this is a site in which uses a large horizontal
navigation as it's primary navigation method and then hides that
navigation when it switches to vertical.

The component provides styling for focus, active and hover. The styles 
for navigation items is near identical to buttons, to keep a consistent 
look and feel.

The url provided to a navigation link will be used as the 'to' property of
a react router link.

## Examples

### Orientation 
<div style="background:white">
  <img src="images/nav-vertical.png" width="232" /><br/>
  <img src="images/nav-horizontal.png" width="495" />
</div>

```
const navItems = [
  {url: 'http://testurl.test',label: 'Styles'},
  {url: 'http://testurl.test',label: 'Components'},
  {url: 'http://testurl.test',label: 'Patterns',active: true},
  {url: 'http://testurl.test',label: 'Community'},
  {url: 'http://testurl.test',label: 'About'},
]

<Nav orientation="vertical" items={navItems}/>

<Nav orientation="horizontal" items={navItems}/>
```

### Sizes
<img src="images/nav-sizes.png" width="675" />

```
<Nav orientation="horizontal" items={navItems} size="small/>
<Nav orientation="horizontal" items={navItems} size="regular"/>
<Nav orientation="horizontal" items={navItems} size="large"/>
<Nav orientation="horizontal" items={navItems} size="xlarge"/>
```

## Properties
### Nav

| Name        | Type           | Required | Default  | Description
| ---------   | -------------- | -------- | -------  | -----------
| className   | string         | False    |          | Optional extra css class to attach to the wrapper element
| navItems    | Array<any>     | True     |          | An array of navigation items using the format described below |
| orientation | string (horizontal/vertical)| False    | vertical | The direction to display the items.  |
| size        | string (small/regular/large/xlarge) | False    | regular  | The font size for items  |

### NavItem

The properties required for a nav item depend on the component that will render the item. If no component is passed in with
the item then the 'Link'component will be used to render the nav item. Any properties in the nav item wil be passed to the
render component. One example of an alternative nav item render componet would be a React Router Link component, this 
requires a 'to' property. The label property is used as the child of the render component. By default a className of 
'rn-nav__item' is passed to the component.

| Name        | Type            | Required | Default  | Description
| ---------   | --------------- | -------- | -------  | -----------
| Component   | ReactNode       | False    | Link     | By default          |
| label       | string          | True     |          | The text to display |

### Link

The default NavItem render component. Renders a link.

| Name        | Type           | Required | Default  | Description
| ---------   | -------------- | -------- | -------  | -----------
| active      | boolean        | False    | false    | Set to true for the currently active navigation item |
| label       | string         | True     |          | The text to display |
| url         | string         | True     |          | The url to send the browser to |
