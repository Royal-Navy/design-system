import { components } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color } = selectors

export const StyledMenu = styled(components.Menu)`
  border: 1px solid ${color('action', '600')};
  border-top: 0;
  background: ${color('neutral', 'white')};

  &&& {
    margin-top: -2px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 0 0 0 1px ${color('action', '600')},
      -2px 2px 0 2px ${color('action', '100')},
      2px 2px 0 2px ${color('action', '100')};
  }

  &::after {
    position: absolute;
    top: -1px;
    right: 0;
    left: 0;
    height: 1px;
    background: ${color('neutral', 'white')};
    content: '';
  }
`
