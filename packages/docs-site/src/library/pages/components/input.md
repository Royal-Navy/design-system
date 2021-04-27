---
title: Text Input
description: Text inputs let users enter and edit text.
header: true
---

import InputComponent from '../../images/components/forms/input/Component'
import InputAnatomy from '../../images/components/forms/input/Anatomy'
import InputStates from '../../images/components/forms/input/States'
import InputPreComponent from '../../images/components/forms/input/PrePost'
import InputPreAnatomy from '../../images/components/forms/input/PreAnatomy'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/text-input--default" />
</div>

# Overview

<InputComponent />

## Usage
The Text Input should be used to let the user enter a single line of text. It typically appears in forms and modals. If you require the user to enter multi-line content, then the [Textarea component](/forms/textarea) should be used instead.

## Design
The Text Input should stand out and be easily discoverable by users. The text label should be concise, effectively communicating to the user the type of input required.

### Anatomy
<InputAnatomy />

1. **Label**. Should be used to describe to the user what the desired input should be. Every field should have a text label. The label should always be visible on all inputs, excluding search bars.
2. **User Input**. This is the text the user has entered into the Text Input.
3. **Container**. Wraps the entire component.

### Sizing & Spacing
The Text Input is available in one standard size. It has been created in relation to other form elements to ensure consistency.

### States
<InputStates />

The Text Input has three states - `default`, `active`, and `filled`.

---

### Pre & Post Fix Labels
The Fix Labels are used for adding additional information to an input. They can be either icons or text.
<InputPreComponent />

#### Usage
The labels should accompany the main input label. They should not be the main focus of the Text Input.

#### Anatomy
<InputPreAnatomy />

1. **Container**. Wraps the Pre and Post fixed Labels
2. **Content**. Can be either text or an icon.

### Sizing & Spacing
The Pre and Post fixes don’t have any inherit sizes themselves. As they are additions to the Text Input component, they are sized according to the input.

### Hierarchy & Placement
Only Pre and Post fix should be used on each input.
