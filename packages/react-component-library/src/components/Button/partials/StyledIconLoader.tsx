import styled, { css } from 'styled-components'

interface StyledIconLoaderWrapperProps {
  $showLoadingText: boolean
}

export const StyledIconLoaderWrapper = styled.div<StyledIconLoaderWrapperProps>`
  display: inline-flex;

  ${({ $showLoadingText }) =>
    !$showLoadingText &&
    css`
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      align-items: center;
      justify-content: center;
    `}
`
