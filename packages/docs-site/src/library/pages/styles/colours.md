---
title: Colours
description: 'Using colour within a Standard Toolkit application'
tags: public
pageClass: ''
template: default
header: true
---

import Swatch from '../../../components/presenters/swatch'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

# Colours

A consistent and well-named colour system provides a strong basis for all Standards Toolkit applications. We have provided several base colours and modifier shades that allow you to design and build a variety of user interfaces (UIs) whilst maintaining consistency across the platform.

## Default Colour Palette

Out-of-the-box Standards Toolkit provides five base colours. We use functional names for colours, rather than their literal colour names (e.g. `red` or `blue`). This allows us to provide multiple different colour schemes for a variety of scenarios, whilst keeping them semantically correct.

#### Neutral

Neutral shades provide the base of Standards Toolkit applications. They should be used to build UIs and mostly mostly serve as background, text colour, and border shades for the components. The majority of colours for an application will be from the Neutral Palette.

<Swatch color="#0a141b" label="Black" />
<Swatch color="#0a141b" label="900" />
<Swatch color="#0c1720" label="800" />
<Swatch color="#12202b" label="700" />
<Swatch color="#1c2d39" label="600" />
<Swatch color="#233745" label="500" />
<Swatch color="#3e5667" label="400" />
<Swatch color="#748999" label="300" />
<Swatch color="#b8c7d2" label="200" />
<Swatch color="#e2e9ee" label="100" />
<Swatch color="#f8fafc" label="000" />
<Swatch color="#FFFFFF" label="white" />

#### Primary

The Primary shades are mostly used to indicate the main action of a component. By default, use the Primary shades instead of the named state colours (Success, Warning, or Danger) for the majority of actions.

Another use for the Primary Palette is for the components that need to stand out from their neutral background palette. Styling an Alert component with the Primary palette will get the user’s attention but it will not have any of the associated connotations that the Success/Warning/Danger has.

<Swatch color="#253b5b" label="900" />
<Swatch color="#274776" label="800" />
<Swatch color="#2661a7" label="700" />
<Swatch color="#2a77c7" label="600" />
<Swatch color="#3a8fdd" label="500" />
<Swatch color="#58aae9" label="400" />
<Swatch color="#85c6f2" label="300" />
<Swatch color="#b7dff7" label="200" />
<Swatch color="#ddf4ff" label="100" />
<Swatch color="#ecf8ff" label="100" />

#### Alt Primary

<Swatch color="#253b5b" label="900" />
<Swatch color="#274776" label="800" />
<Swatch color="#2661a7" label="700" />
<Swatch color="#2a77c7" label="600" />
<Swatch color="#3a8fdd" label="500" />
<Swatch color="#58aae9" label="400" />
<Swatch color="#85c6f2" label="300" />
<Swatch color="#b7dff7" label="200" />
<Swatch color="#ddf4ff" label="100" />
<Swatch color="#ecf8ff" label="100" />

### State Colours

State colours are used to improve the semantics of particular Actions. These palettes should be used sparingly, as they capture the user's attention.

#### Success

<Swatch color="#3b612c" label="900" />
<Swatch color="#3b6f33" label="800" />
<Swatch color="#479442" label="700" />
<Swatch color="#60b255" label="600" />
<Swatch color="#76c767" label="500" />
<Swatch color="#8fd57f" label="400" />
<Swatch color="#abe39b" label="300" />
<Swatch color="#c6f3b5" label="200" />
<Swatch color="#e5ffd9" label="100" />
<Swatch color="#f4ffef" label="000" />

#### Alt Success

<Swatch color="#1f4a35" label="900" />
<Swatch color="#245c40" label="800" />
<Swatch color="#297a4f" label="700" />
<Swatch color="#31975e" label="600" />
<Swatch color="#3fb26d" label="500" />
<Swatch color="#5dcd86" label="400" />
<Swatch color="#8fe2ab" label="300" />
<Swatch color="#bff4cf" label="200" />
<Swatch color="#dfffe9" label="100" />
<Swatch color="#eefff2" label="000" />

#### Warning

<Swatch color="#693a12" label="900" />
<Swatch color="#8c4f17" label="800" />
<Swatch color="#ae6d1d" label="700" />
<Swatch color="#cf9328" label="600" />
<Swatch color="#e8c242" label="500" />
<Swatch color="#f5db54" label="400" />
<Swatch color="#faed7e" label="300" />
<Swatch color="#fefbb8" label="200" />
<Swatch color="#fffddc" label="100" />
<Swatch color="#ffffee" label="000" />

#### Alt Warning

<Swatch color="#3b2d6e" label="900" />
<Swatch color="#4b358f" label="800" />
<Swatch color="#603fb8" label="700" />
<Swatch color="#744fd0" label="600" />
<Swatch color="#936fe8" label="500" />
<Swatch color="#ad89f1" label="400" />
<Swatch color="#d0b5f9" label="300" />
<Swatch color="#e5d3fd" label="200" />
<Swatch color="#f2e9ff" label="100" />
<Swatch color="#f9f3ff" label="000" />

### Danger

<Swatch color="#692524" label="900" />
<Swatch color="#902727" label="800" />
<Swatch color="#be2b2b" label="700" />
<Swatch color="#e13637" label="600" />
<Swatch color="#f44949" label="500" />
<Swatch color="#fc7576" label="400" />
<Swatch color="#fea9a9" label="300" />
<Swatch color="#fed1d1" label="200" />
<Swatch color="#feeaec" label="100" />
<Swatch color="#fff3f4" label="000" />


## Using Colours

To reference colours and their shades, we have provided a `color()` function. This function takes two values, `color` and `shade`.

<CodeHighlighter 
source={`color: color(neutral, 500);
border: 1px solid color(danger, 300);
// Result
color: #627d98;
border: 1px solid #f36968;`} language="css"
/>
