---
title: Dialog
description: Dialogs are an easy way to get validation from the user.
---

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
