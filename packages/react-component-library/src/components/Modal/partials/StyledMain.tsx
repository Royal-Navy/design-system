import { color, mq } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledMain = styled.article`
  border: 1px solid ${color('neutral', '200')};
  background: ${color('neutral', 'white')};
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px 8px 0 0;
  max-height: 95vh;
  overflow-y: auto;

  ${mq({ gte: 'xs' })`
    border-radius: 5px;
    bottom: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 700px;
  `}
`
