import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { spacing, color } = selectors

export const StyledIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: ${spacing('6')} 0 ${spacing('6')} ${spacing('6')};
  order: 0;
  color: ${color('neutral', '400')};

  & > svg {
    height: 18px;
    width: 18px;
  }
`
