---
title: Nav
description: Documentation and examples of how to use NELSON navs
---

# Horizontal

By default, the nav component lays out its links horizontally.

```html
  <nav className="rn-nav">
    <a className="rn-nav__item" href="">Nav Item</a>
    <a className="rn-nav__item" href="">Nav Item</a>
  </nav>
```

## Vertical

Adding a class of `.vertical` to the `.rn-nav` component will stack the nav links on top of each other.

```html
  <nav className="rn-nav">
    <a className="rn-nav__item" href="">Nav Item</a>
    <a className="rn-nav__item" href="">Nav Item</a>
  </nav>
```

## Full Width

To stretch the nav links across the full width of their parent, add a class of `.stretch` to the `.rn-nav` component. *Note*: this class is only available with the horizontal orientation.


## Active States

Adding a class of `.active` to the `.rn-nav__item` component will provide styling for the active state.

```html
  <nav className="rn-nav">
    <a className="rn-nav__item active" href="">Nav Item</a>
    <a className="rn-nav__item" href="">Nav Item</a>
  </nav>
```

## Disabled State

Adding `.disabled` to any of the links will visually fade out the link, and prevent all pointer events.

```html
  <nav className="rn-nav">
    <a className="rn-nav__item" href="">Nav Item</a>
    <a className="rn-nav__item disabled" href="">Nav Item</a>
  </nav>
```