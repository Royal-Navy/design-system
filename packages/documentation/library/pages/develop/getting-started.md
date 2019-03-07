---
title: Getting started
description: A quick start guide to get up and running with the NELSON toolkit.
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

The NELSON Toolkit contains support for both horizontal and vertical app layouts. The HTML remains the same, however the direction can be changed via the `.horizontal` and `.vertical` classes.

There are two variations of the `.vertical` app layout. This is to accommodate the two variations of the [Masthead Component](/develop/components/masthead). If you are using the larger Masthead with tabs, add the `.vertical--tabs` class to the `.rn-layout` component.

```html
    <div class="rn-layout vertical--tabs">
        <div class="rn-layout__nav">
            <! --  Masthead Content -->  
        </div>
        <div class="rn-layout__app">
            <! --  App Content --> 
        </div>
    </div>
`` `

To change the app into a horizontal layout, change the `.vertical` class to `.horizontal`.

```html
<div class="rn-layout horizontal">
    <div class="rn-layout__nav">
        <! --  Sidebar Component -->
    </div>
    <div class="rn-layout__app">
        <! --  App Content -->
    </div>
</div>
```

## Use with front-end frameworks.

These components and classes can be used in any package, however if you are using a front-end framework like React or Vue, the component HTML may need to be altered to accommodate this. Whilst the current version of the NELSON toolkit (`v0.1.0`) doesn't contain any React or Vue components, from `v.0.2.0` we will begin adding support for these frameworks from `v0.2.0` . Keep an eye on this website for more information.

## If something isn't working.

If you are struggling with something in the toolkit or if you see a potential bug, please don't hesitate to contact us, you can get in touch with us via email at standards@royalnavy.io or you can raise an issue on our [GitHub Page](https://github.com/Royal-Navy/standards-toolkit/issues).
