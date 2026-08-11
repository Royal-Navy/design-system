import styled from 'styled-components'
import { color, Theme } from '@royalnavy/design-tokens'

export const StyledTabs = styled.ol`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) =>
    (theme as Theme)?.mode === 'dark'
      ? color('neutral', '000', theme as Theme)
      : 'transparent'};
`
