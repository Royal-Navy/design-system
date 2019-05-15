---
title: Dialogs
description: Dialogs are an easy way to get validation from the user.
---

# Overview

Dialogs are full screen components designed to prompt the user to confirm their action. This is particularly useful when the action the user is performing is of a destructive nature, such as permanently deleting data.


```html
  <div className="rn-dialog neutral">
    <div className="window">
      <div className="content">
        <h4 className="title">Dialog Title</h4>
      </div>
      <div className="footer">
          <Button className="h_mr-2 neutral tertiary">Cancel</Button>
          <Button onClick="clickAction state">Action Button</Button>
      </div>
    </div>
  </div>
```

## State

By default, a Dialog Component is presented with the Neutral state. To change the state of a Dialog, the following state classes are provided: `.primary`, `.success`, `.warning`, and `.danger`.

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=Dialog&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).
