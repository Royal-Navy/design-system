---
title: Button
description:
  Buttons are a simple interface element to allow a user to trigger an action,
  but buttons are not meant to act as a navigation aid.
---

## Types and usage

Buttons are used to invoke actions, not navigation. A button should only navigate when the action requires it,
such as adding a new record.

A button can be one of 3 variants to indicate it's importance and role on a page: primary, secondary or tertiary. There
is a further variation allowed to indicate if a button is associated with an action that is dangerous, such as deleting
a record.

## Examples

### Button Variants (types)

<img src="images/button-variants.png" width="311" />

```
<Button onClick={action} variant="primary">Primary</Button>
<Button onClick={action} variant="secondary">Secondary</Button>
<Button onClick={action} variant="tertiary">Tertiary</Button>

<Button onClick={action} variant="primary" color="danger">Primary</Button>
<Button onClick={action} variant="secondary" color="danger">Secondary</Button>
<Button onClick={action} variant="tertiary" color="danger">Tertiary</Button>
```

<hr/>

### Icon 

<img src="images/button-icon.png" width="207" />

```
<Button onClick={action} icon={<TriangleDown />}>Closed</Button>
<Button onClick={action} icon={<TriangleUp />}>Open</Button>
```

### Size 

<img src="images/button-size.png" width="361" />

```
<Button onClick={action} state="primary" size="small">Small</Button>
<Button onClick={action} state="primary" size="regular">Regular</Button>
<Button onClick={action} state="primary" size="large">Large</Button>
<Button onClick={action} state="primary" size="xlarge">xLarge</Button>
```

## Properties

| Name      | Type           | Required | Default | Description                                                                                   
| --------- | -------------- | -------- | ------- | -----------
| children  | Node or String | True     |         | The content to place in the button, typically text   
| className | String         | False    |         | Custom css class to add to the button element
| icon      | Node           | False    |         | Icon to display to the right of text in the button. Accepts any Node but ideally would be an image or svg tag                       
| onClick   | Func: ()=>void | True     |         | Function to call when a user clicks on a button
| size      | String         | False    | regular | (small/regular/large/xlarge) The size for the button
| variant   | String         | False    | teriary | (primary/secondary/tertiary) The style of button
| color     | String         | False    |         | (danger) An alternative color style to use, danger is the only alternative currently supported                                                                                       

