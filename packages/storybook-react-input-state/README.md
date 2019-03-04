# @royalnavy/storybook-react-input-state

This Storybook JS component allows you to create storybooks that present functional **Form** components that would normally need some kind of stateful container. So if you created a functional input component you can try it out by simplying wrapping it in this component. So how easy is it to use? This easy:

```
<State>
  <Input name="colour" value="Red" />
</State>
```

There are already a few plugins and components to help with state in Storybook, but they provide more advanced functionality and do not work well with the `storybook-info` addon. This plugin attempts to require zero configuration while keeping the output clean and is specifically designed to wrap form input components, using the name property as the state key.

Below is an example story using the component:

```
Input.stories.js
----------------
import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '@royalnavy/storybook-react-input-state'

import Input from './Input'

const stories = storiesOf('Input', module)

stories.add('Input', () => (
  <form>
    <State>
      <Input name="user" label="User" type="text" value="fred" />
      <Input name="colour" label="Colour" type="text" value="" />
    </State>
  </form>
))
```

If you wish to add add the `storybook-info` the code required would be something like:

```
.storybook/config.js
--------------------
import { withInfo } from '@storybook/addon-info'
import { addDecorator, configure } from '@storybook/react'

addDecorator(withInfo)

...


Input.stories.js
----------------
import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '@royalnavy/storybook-react-input-state'

import Input from './index'

const stories = storiesOf('Input', module)
stories.addParameters({
  info: { inline: true, header: false, propTablesExclude: [State] },
})

stories.add('Input', () => (
  <State>
    <Input name="user" label="User" type="text" value="fred" />
  </State>
))
```

The result will be a Storybook story that shows the component in action, example code (only wrapping it in a State component) and a property table.

Finally, if you add your own `onChange` property to an input that method will still get called in addition to the state listening for changes.
