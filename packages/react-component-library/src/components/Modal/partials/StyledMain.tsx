import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, mq, shadow } = selectors

export const StyledMain = styled.article`
  text-shadow: ${shadow('2')};
  border: 1px solid ${color('neutral', '200')};
  background: ${color('neutral', 'white')};
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px 8px 0 0;

  ${mq({ gte: 'xs' })`
    border-radius: 5px;
    bottom: auto;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 100%;
    max-width: 700px;
  `}
`
