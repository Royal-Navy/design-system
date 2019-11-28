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

A consistent and well-named colour system provides a strong basis for all **Standards Toolkit** applications. We have provided several base colours and modifier shades that allow you to design and build a variety of User Interfaces (UIs) whilst maintaining consistency across the platform.

## Default Colour Palette

Out-of-the-box Standards Toolkit provides five base colours. We use functional names for colours, rather than their literal colour names (e.g. `red` or `blue`). This allows us to provide multiple different colour schemes for a variety of scenarios, whilst keeping them semantically correct.

#### Neutral

Neutral shades provide the base of Standards Toolkit applications. They should be used to build UIs and mostly mostly serve as background, text colour, and border shades for the components. The majority of colours for an application will be from the Neutral Palette.

<div className="swatch-container">
  <Swatch color="#0a141b" name="900" theme="dark" />
  <Swatch color="#0c1720" name="800" theme="dark" />
  <Swatch color="#12202b" name="700" theme="dark" />
  <Swatch color="#1c2d39" name="600" theme="dark" />
  <Swatch color="#233745" name="500" theme="dark" />
  <Swatch color="#3e5667" name="400" theme="dark" />
  <Swatch color="#748999" name="300" />
  <Swatch color="#b8c7d2" name="200" />
  <Swatch color="#e2e9ee" name="100" />
  <Swatch color="#f8fafc" name="000" />
  <Swatch color="#0a141b" name="Black" theme="dark" />
  <Swatch color="#FFFFFF" name="white" />
</div>

#### Action

The Action shades are mostly used to indicate the main action of a component. By default, use the Action shades instead of the named state colours (Success, Warning, or Danger) for the majority of actions.

Another use for the Action palette is for the components that need to stand out from their neutral background palette. Styling an Alert component with the Action palette will get the user’s attention but it will not have any of the associated connotations that the Success/Warning/Danger has.

<div className="swatch-container">
  <Swatch color="#253b5b" name="900" theme="dark" />
  <Swatch color="#274776" name="800" theme="dark" />
  <Swatch color="#2661a7" name="700" theme="dark" />
  <Swatch color="#2a77c7" name="600" theme="dark" />
  <Swatch color="#3a8fdd" name="500" theme="dark" />
  <Swatch color="#58aae9" name="400" theme="dark" />
  <Swatch color="#85c6f2" name="300" />
  <Swatch color="#b7dff7" name="200" />
  <Swatch color="#ddf4ff" name="100" />
  <Swatch color="#ecf8ff" name="100" />
</div>

### State Colours

State colours are used to improve the semantics of particular Actions. These palettes should be used sparingly, as they capture the user's attention.

#### Success

<div className="swatch-container">
  <Swatch color="#3b612c" name="900" theme="dark" />
  <Swatch color="#3b6f33" name="800" theme="dark" />
  <Swatch color="#479442" name="700" theme="dark" />
  <Swatch color="#60b255" name="600" theme="dark" />
  <Swatch color="#76c767" name="500" theme="dark" />
  <Swatch color="#8fd57f" name="400" theme="dark" />
  <Swatch color="#abe39b" name="300" />
  <Swatch color="#c6f3b5" name="200" />
  <Swatch color="#e5ffd9" name="100" />
  <Swatch color="#f4ffef" name="000" />
</div>

#### Warning


<div className="swatch-container">
  <Swatch color="#693a12" name="900" theme="dark" />
  <Swatch color="#8c4f17" name="800" theme="dark" />
  <Swatch color="#ae6d1d" name="700" theme="dark" />
  <Swatch color="#cf9328" name="600" theme="dark" />
  <Swatch color="#e8c242" name="500" theme="dark" />
  <Swatch color="#f5db54" name="400" />
  <Swatch color="#faed7e" name="300" />
  <Swatch color="#fefbb8" name="200" />
  <Swatch color="#fffddc" name="100" />
  <Swatch color="#ffffee" name="000" />
</div>

### Danger

<div className="swatch-container">
  <Swatch color="#841c1b" name="900" theme="dark" />
  <Swatch color="#b22820" name="800" theme="dark" />
  <Swatch color="#d53229" name="700" theme="dark" />
  <Swatch color="#ec4138" name="600" theme="dark" />
  <Swatch color="#f45249" name="500" theme="dark" />
  <Swatch color="#fc7c75" name="400" theme="dark" />
  <Swatch color="#fea9a9" name="300" />
  <Swatch color="#fed1d1" name="200" />
  <Swatch color="#feeaec" name="100" />
  <Swatch color="#fff3f4" name="000" />
</div>


### Supplementary colours
As the name describes, Supplementary colours are there to _supplement_ the main colour palette. They can be used for categories and data visualation for example, but don't have any state associated with them.

#### Sup A

<div className="swatch-container">
  <Swatch color="#343160" name="900" theme="dark" />
  <Swatch color="#3b3985" name="800" theme="dark" />
  <Swatch color="#4248b6" name="700" theme="dark" />
  <Swatch color="#4e5cd3" name="600" theme="dark" />
  <Swatch color="#5b73e6" name="500" theme="dark" />
  <Swatch color="#7392f3" name="400" theme="dark" />
  <Swatch color="#99b7f9" name="300" />
  <Swatch color="#bbd5fe" name="200" />
  <Swatch color="#deebff" name="100" />
  <Swatch color="#e8f2ff" name="000" />
</div>

#### Sup B

<div className="swatch-container">
  <Swatch color="#3b2d6e" name="900" theme="dark" />
  <Swatch color="#4b358f" name="800" theme="dark" />
  <Swatch color="#603fb8" name="700" theme="dark" />
  <Swatch color="#744fd0" name="600" theme="dark" />
  <Swatch color="#936fe8" name="500" theme="dark" />
  <Swatch color="#ad89f1" name="400" theme="dark" />
  <Swatch color="#d0b5f9" name="300" />
  <Swatch color="#e5d3fd" name="200" />
  <Swatch color="#f2e9ff" name="100" />
  <Swatch color="#f9f3ff" name="000" />
</div>


#### Sup C

<div className="swatch-container">
  <Swatch color="#6c2d6e" name="900" theme="dark" />
  <Swatch color="#8c358f" name="800" theme="dark" />
  <Swatch color="#b43fb8" name="700" theme="dark" />
  <Swatch color="#cc4fd0" name="600" theme="dark" />
  <Swatch color="#e46fe8" name="500" theme="dark" />
  <Swatch color="#ee89f1" name="400" theme="dark" />
  <Swatch color="#f7b5f9" name="300" />
  <Swatch color="#fcd3fd" name="200" />
  <Swatch color="#fee9ff" name="100" />
  <Swatch color="#fff3ff" name="000" />
</div>

#### Sup D

<div className="swatch-container">
  <Swatch color="#702232" name="900" theme="dark" />
  <Swatch color="#972b41" name="800" theme="dark" />
  <Swatch color="#c43854" name="700" theme="dark" />
  <Swatch color="#d84b67" name="600" theme="dark" />
  <Swatch color="#f35d7b" name="500" theme="dark" />
  <Swatch color="#f77f97" name="400" theme="dark" />
  <Swatch color="#ffa2b5" name="300" />
  <Swatch color="#ffcce5" name="200" />
  <Swatch color="#ffe1f0" name="100" />
  <Swatch color="#ffeef6" name="000" />
</div>

#### Sup E

<div className="swatch-container">
  <Swatch color="#853a0c" name="900" theme="dark" />
  <Swatch color="#9d4712" name="800" theme="dark" />
  <Swatch color="#c25c1d" name="700" theme="dark" />
  <Swatch color="#e0712c" name="600" theme="dark" />
  <Swatch color="#f48b49" name="500" theme="dark" />
  <Swatch color="#fca975" name="400" theme="dark" />
  <Swatch color="#fecaa9" name="300" />
  <Swatch color="#fee2d1" name="200" />
  <Swatch color="#fef2ea" name="100" />
  <Swatch color="#fff8f3" name="000" />
</div>

#### Sup F

<div className="swatch-container">
  <Swatch color="#1f4a35" name="900" theme="dark" />
  <Swatch color="#245c40" name="800" theme="dark" />
  <Swatch color="#297a4f" name="700" theme="dark" />
  <Swatch color="#31975e" name="600" theme="dark" />
  <Swatch color="#3fb26d" name="500" theme="dark" />
  <Swatch color="#5dcd86" name="400" theme="dark" />
  <Swatch color="#8fe2ab" name="300" />
  <Swatch color="#bff4cf" name="200" />
  <Swatch color="#dfffe9" name="100" />
  <Swatch color="#eefff2" name="000" />
</div>


## Using Colours

To reference colours and their shades, we have provided a `color()` function. This function takes two values, `color` and `shade`.

<CodeHighlighter 
source={`color: color("neutral", "500");
border: 1px solid color("danger", "300");
// Result
color: #627d98;
border: 1px solid #f36968;`} language="css"
/>
