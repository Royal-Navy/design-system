import styled from 'styled-components'

interface StyledTextProps {
  $isLoading: boolean
  $showLoadingText: boolean
}

export const StyledText = styled.span<StyledTextProps>`
  visibility: ${({ $isLoading, $showLoadingText }) =>
    $isLoading && !$showLoadingText ? 'hidden' : 'initial'};
`
