import styled from 'styled-components'

interface StyledTextProps {
  $isLoading: boolean
}

export const StyledText = styled.span<StyledTextProps>`
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'initial')};
`
