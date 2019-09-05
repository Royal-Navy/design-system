---
title: Textarea
description: Textareas allow users to enter multiple lines of text.
header: true
---

import { Tab, TabSet } from '@royalnavy/react-component-library'

import SketchWidget from '../../../../components/presenters/sketch-widget'
import TextareaComponent from '../../../images/components/forms/textarea/component.svg'
import TextareaAnatomy from '../../../images/components/forms/textarea/anatomy.svg'
import TextareaStates from '../../../images/components/forms/textarea/states.svg'
import TextareaVariations from '../../../images/components/forms/textarea/variations.svg'

# Textarea
The textarea component lets users enter and edit multiple lines of text.

<TextareaComponent />

## Usage
The Textarea component should be used to let users enter multiple lines of text. It typically appears in Forms and Modals, however can be used wherever the requirement for multiple lines of text exists. If you require the user to enter a single line of text, use the [Text Input component](/components/forms/input) instead.


<TabSet>

<Tab title="Design">

<SketchWidget name="Textarea" href="/standards-toolkit.sketch" />

The textarea should contain a concise message, communicating to the user the expected content. To ensure there is appropriate readability of the entered content, try to make the Textarea container stretch to the full width of its parent.

### Anatomy

<TextareaAnatomy />

1. **Label**. The Label should be used to describe to the user what the desired input should be. Every textarea should have a text label.
2. **User Input**. The User Input is the text the user has entered into the Textarea.
3. **Container**. The Container wraps the entire component.

### States

<TextareaStates />

The Textarea has 3 states - default, active, and filled.


### Variations

<TextareaVariations />

The textarea comes in _two_ variations - fixed and resizable. The fixed version of the Textarea cannot be resized by the user, whereas the resizable one can. **Note:** Whilst the resizable Textarea can be resized by the user, it can only be changed on the `y-axis`. This is to prevent the interface breaking when the textarea is stretched outside of its parent container.

</Tab>

<Tab title="Develop">
  DEVELOPMENT CONTENT

</Tab>
</TabSet>