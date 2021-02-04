import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, zIndex } = selectors

export const StyledEvent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 4.5rem;
  transform: translateY(-50%);
  display: inline-flex;
  flex-direction: column;
  padding: ${spacing('2')} 0;
  overflow: visible;
  z-index: ${zIndex('body', 2)};
`
