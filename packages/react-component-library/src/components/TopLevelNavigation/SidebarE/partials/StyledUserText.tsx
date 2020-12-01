import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, color, fontSize } = selectors

export const StyledUserText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 1rem);
  padding: 0 0 0 ${spacing('6')};
  white-space: nowrap;
  opacity: 1;
  transition: opacity 150ms linear;

  > div {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;

    a:hover {
      text-decoration: none;
    }

    > span {
      color: ${color('neutral', 'white')};
      font-size: ${fontSize('m')};
    }

    a span {
      margin-top: ${spacing('1')};
      color: ${color('neutral', '300')};
      font-size: ${fontSize('s')};
    }
  }

  svg {
    width: 1.65rem;
    height: 1.65rem;
    color: ${color('neutral', 'white')};
    background-color: ${color('neutral', '400')};
    border-radius: 2px;
    padding: ${spacing('2')};
  }
`
