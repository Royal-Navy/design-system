---
title: Getting started
description: Cupidatat ut aliqua nisi ut aliqua consequat cillum quis et reprehenderit ullamco sint culpa elit.
tags: public
pageClass: ''
template: withsidebar
---

The Nelson toolkit provides a suite of components and CSS styles which you can use to build your webapp. 

## Assumptions

This guide makes the following assumptions:

- You have basic knowledge of HTML
- You have basic knowledge of CSS
- You are comfortable working with SASS

## Components

The toolkit includes components to help build up a page with minimal coding, this guide contains HTML snippets which you can copy and paste directly into your HTML page and use immediately.

[A full list of those components is available here](/develop/).

## Installation

In order to use the HTML snippets you will first need to add the toolkit css to your HTML file.

To do this locate the `<head>` section and add the following snippet:

```html
<link rel="stylesheet" href="style.css">
```

Then you are good to go.

## Layouts

If you are planning on only using the toolkit to build a page, you will need to use a layout component. To do this, simply add the following immediately after the opening `<body>` tag:

```html
<div class="rn-layout">
  <-- Your content goes here -->
</div>
```
<!-- ED: You need to update this bit, I pulled the above code out of the air -->

## Use with front-end frameworks.

These components and classes can be used in any package, however if you are using a front-end framework like React or Vue, the component HTML may need to be altered to accommodate this. Whilst the current version of the NELSON toolkit (`v0.1.0`) doesn't contain any React or Vue components, from `v.0.2.0` we will begin adding support for these frameworks from `v0.2.0` . Keep an eye on this website for more information.

## If something isn't working.

If you are struggling with something in the toolkit or if you see a potential bug, please don't hesitate to contact us, you can get in touch with us via email at standards@royalnavy.io or you can raise an issue on our [GitHub Page](https://github.com/Royal-Navy/standards-toolkit/issues).
