# @RoyalNavy/Documentation

The documentation for the royalnavy.io cms.

## How to use this

The documenation files are split into two folders inside the main `library` folder.

`icons` is where you will find the icon library icons, to add to this simply copy an svg file into that folder and it will appear the next time the royalnavy.io site builds. It takes it's name from the filename itself.

`pages` is where the actual content lives, it is all in markdown format. Adding/editing/deleting a file or folder will cause the changes made to be reflected on royalnavy.io the next time it builds.

**NOTE:** ALL folders within the `library` folder will be copied over to the royalnavy.io site but it is only configured to use pages and icons. Other folders will be ignored, if you have the need to add a folder, please discuss this with the standards team.

## How to work with the markdown files

### Meta data

Although the content is mostly pure markdown it does have some meta data in the form of 'frontmatter'. This is encapsulated at the top of each markdown file and looks like this:

```
---
title: Anchor design system
template: withsidebar
---
```

The above shows the minimum amount of metadata a page can have. It requires a title (which can be anything you like) and it requires a template (although if you leave that out, it will default to 'withsidebar').

### Templates

Your template options are as follows:

`landing` - will display a landing page with the same format as the homepage

`withsidebar` - an article layout page which has a sidebar navigation menu showing all links in a folder

`nosidebar` - the same as above but without the sidebar

### Components

Many components are available on royalnavy.io and they can be used by adding a HTML snippet to a page.

For example:

```
<Noteblock class="warning">
## CSS Framework

It provides base variables and helper classes to aid with application development.
[Open section](/css-framework)
</Noteblock>
```

The above will render a `Noteblock` component with a class of `warning`. You can also send props to components using the same attribute method as giving it a class.

Content data shouldn't be sent with props where possible though, it should be placed as regular markdown in between the components opening and closing tags.

### Folders and subfolders

Any folder directly in the `pages` folder will be treated as a top level link. It will not automatically appear in the top navigation though. If you wish this to happen you need to add: `includedInNav: true` to the meta data of that folders `index.md` file.

Sub folders within these folders will be considered as categories within that parent. You can only go one level deep at the moment.

Each folder must have an index.md file in it as this is the file that the meta data is taken from for that section.

## Building the site

<!-- TODO: -->
When a push is made to the master branch of this repository, it will trigger an automatic build of the royalnavy.io master branch which will pull the latest content in and redeploy the site.
