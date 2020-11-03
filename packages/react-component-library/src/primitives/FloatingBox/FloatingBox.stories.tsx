import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import {
  FloatingBox,
  FloatingBoxSchemeType,
  FloatingBoxPositionType,
} from './FloatingBox'
import { FLOATING_BOX_ARROW_POSITION, FLOATING_BOX_SCHEME } from './constants'

export default { component: FloatingBox, title: 'FloatingBox' } as Meta

const FloatingBoxStory = (props: {
  scheme: FloatingBoxSchemeType
  position: FloatingBoxPositionType
}) => (
  <div style={{ padding: '1rem' }}>
    <FloatingBox width={300} height={200} top={100} left={100} {...props}>
      <div style={{ padding: '0 1rem' }}>
        <pre>This is some arbitrary JSX</pre>
      </div>
    </FloatingBox>
  </div>
)

export const DarkTopLeft = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.TOP_LEFT}
  />
)
DarkTopLeft.storyName = 'Dark top left'

export const DarkTopRight = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.TOP_RIGHT}
  />
)
DarkTopRight.storyName = 'Dark top right'

export const DarkRightTop = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.RIGHT_TOP}
  />
)
DarkRightTop.storyName = 'Dark right top'

export const DarkRightBottom = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM}
  />
)
DarkRightBottom.storyName = 'Dark right bottom'

export const DarkBottomLeft = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT}
  />
)
DarkBottomLeft.storyName = 'Dark bottom left'

export const DarkBottomRight = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
  />
)
DarkBottomRight.storyName = 'Dark bottom right'

export const DarkLeftTop = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.LEFT_TOP}
  />
)
DarkLeftTop.storyName = 'Dark left top'

export const DarkLeftBottom = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.DARK}
    position={FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM}
  />
)
DarkLeftBottom.storyName = 'Dark left bottom'


export const LightTopLeft = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.TOP_LEFT}
  />
)
LightTopLeft.storyName = 'Light top left'

export const LightTopRight = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.TOP_RIGHT}
  />
)
LightTopRight.storyName = 'Light top right'

export const LightRightTop = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.RIGHT_TOP}
  />
)
LightRightTop.storyName = 'Light right top'

export const LightRightBottom = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM}
  />
)
LightRightBottom.storyName = 'Light right bottom'

export const LightBottomLeft = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT}
  />
)
LightBottomLeft.storyName = 'Light bottom left'

export const LightBottomRight = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
  />
)
LightBottomRight.storyName = 'Light bottom right'

export const LightLeftTop = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.LEFT_TOP}
  />
)
LightLeftTop.storyName = 'Light left top'

export const LightLeftBottom = () => (
  <FloatingBoxStory
    scheme={FLOATING_BOX_SCHEME.LIGHT}
    position={FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM}
  />
)
LightLeftBottom.storyName = 'Light left bottom'
