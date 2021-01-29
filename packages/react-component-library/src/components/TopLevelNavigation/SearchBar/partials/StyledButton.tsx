import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { rgba } from 'polished'

const { color, spacing } = selectors

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  height: 36px;
  background: ${color('neutral', '300')};
  border-radius: 3px;
  margin: 0 ${spacing('6')};
  text-align: center;
  padding: 0 13.5px;
  cursor: pointer;

  > svg {
    color: ${color('neutral', 'white')};
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem ${rgba(color('action', '700'), 0.5)};
    outline: 0;
  }
`
