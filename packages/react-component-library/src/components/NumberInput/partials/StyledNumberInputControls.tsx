import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

export const StyledNumberInputControls = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-left: 1px solid ${color('neutral', '100')};
`
