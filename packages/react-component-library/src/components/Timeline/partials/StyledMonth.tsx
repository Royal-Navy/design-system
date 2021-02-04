import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing, zIndex } = selectors

export const StyledMonth = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 4rem;

  &:last-of-type {
    border-right: none;
  }

  &::after {
    position: absolute;
    right: 0;
    top: 0;
    content: '';
    display: inline-block;
    width: 1rem;
    height: 100vh;
    border-right: ${spacing('px')} dashed ${color('neutral', '200')};
    z-index: ${zIndex('body', 1)};
  }
`
