import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { zIndex, mq, fontSize } = selectors

export const StyledSearchBar = styled.div`
  z-index: ${zIndex('dropdown', 1)}
  display: block;
  margin-top: -1px;
  position: absolute;
  width: 100%;

  .rn-textinput__input {
    font-size: ${fontSize('l')};
  }

  ${mq({ gte: 'xs' })`
    .rn-textinput__input {
      font-size: ${fontSize('base')};
    }
  `}
`
