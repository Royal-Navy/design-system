import { styled, css } from 'styled-components'
import { fontSize, spacing } from '@royalnavy/design-tokens'

interface StyledSelectedBadgesProps {
  $isDisabled: boolean
}

export const StyledSelectedBadges = styled.div<StyledSelectedBadgesProps>`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-self: center;
  row-gap: 100vh;
  height: calc(${fontSize('xs')} * 1.4 + 2 * ${spacing('px')} + 1px);
  min-width: 0;
  overflow: hidden;
  margin-left: ${spacing('2')};

  & > * {
    flex: 1 1 0;
    min-width: 3em;
    max-width: max-content;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ $isDisabled }) =>
    $isDisabled
      ? css`
          opacity: 0.5;
        `
      : css`
          cursor: pointer;
        `}
`
