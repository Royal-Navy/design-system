import styled from 'styled-components'

export const StyledOuterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  height: 44px;
  border-radius: 15px;

  &:active {
    pointer-events: none;
  }
`
