---
title: Forms
description: Examples and usage guidelines for building NELSON forms.
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: ''
---

# Overview

Forms are where you capture data in your application. We provide a number of components to help with the visual styling.

## Inputs

Inputs use the floating label pattern. By default, the label exists as a placeholder inside the input. Once focused, the label transitions to above the input. The advantage of this is the user always has context on the data they are entering. Once the input has been filled, the label remains visible, serving as a reference to the value entered. 


```html
  <div className="rn-input-block">    
    <input className="rn-input" id="input" value="" name="input" />
    <label className="inputLabel" for="input">
      <span className="inputLabelInner">Input Label</span>
    </label>
  </div>
```

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=Input&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).


## Textareas

Textareas are identical in behaviour to inputs. Replacing the input element with a textarea will keep the floating label pattern for the textarea.

```html
  <div className="rn-input-block">
      <textarea className="rn-input" id="input" value="" name="input"></textarea>

    <label className="inputLabel" for="input">
      <span className="inputLabelInner">Textarea Label</span>
    </label>
  </div>
```

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=Input&selectedStory=TextArea&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).


## Checkboxes & Radios

Checkboxes are used for selecting multiple values from a list, whilst radio buttons are used for selecting one value from many choices. The class `.rn-check` is provided to improve the default styling of Radio Buttons and Checkboxes.

```html
  <div className="rn-check">
    <label className="rn-check__label">
      <span className="rn-check__label-inner">Checkbox label</span>
      <input className="rn-check__input" name="checkbox" type="checkbox" value="" />
    </label>
  </div>
```

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=Checkboxes&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).


### With Legend

Checkboxes & Radios can be grouped and wrapped in legends too.

```html
  <fieldset className="rn-check rn-check--has-legend">
    <legend className="rn-check__legend">Legend Title</legend>
    <div className="rn-check">
      <label className="rn-check__label">
        <span className="rn-check__label-inner">Checkbox label</span>
        <input className="rn-check__input" name="checkbox" type="checkbox" value="" />
      </label>
    </div>
  </fieldset>
```

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=Checkboxes&selectedStory=Legend&full=0&addons=0&stories=1&panelRight=0&addonPanel=0).