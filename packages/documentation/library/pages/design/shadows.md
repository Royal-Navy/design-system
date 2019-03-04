---
title: Shadows
audience: public
pageClasses: ''
context: 'Design'
template: withsidebar
---

Shadows simulate the z-axis in a user interface (UI), and are a great way to convey hierarchy and depth in an application.


Shadow Scale | Value
------------ | -----
0            | `0 0 0 transparent`
1            | `0 1px 3px 0 rgba(0, 0, 0, 0.1)`
2            | `0 6px 14px 0 rgba(0, 0, 0, 0.16)`
3            | `0 12px 28px 0 rgba(0, 0, 0, 0.26)`


<Swatch property="box-shadow" label="0" value="0 0 0 transparent">
<Swatch property="box-shadow" label="1" value="0 1px 3px 0 rgba(0, 0, 0, 0.1)">
<Swatch property="box-shadow" label="2" value="0 6px 14px 0 rgba(0, 0, 0, 0.16)">
<Swatch property="box-shadow" label="3" value="0 12px 28px 0 rgba(0, 0, 0, 0.26)">


#### Using Shadows

These shadow values are available as a mixin:

```
@include shadow(1);

// Result
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
```

You can optionally pass a value of `inset` to the mixin to make the box shadow being applied an inset one:

```
@include shadow(1, inset);

// Result
box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1);
```
