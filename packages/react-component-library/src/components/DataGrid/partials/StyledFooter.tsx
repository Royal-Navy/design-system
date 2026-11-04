import { spacing, zIndex } from '@royalnavy/design-tokens'
import { styled, css } from 'styled-components'

interface StyledFooterProps {
  $isFullWidth: boolean
  $isStandard?: boolean
}

const getFullWidthLayout = (isStandard?: boolean) => {
  if (isStandard) {
    return css`
      justify-content: space-between;
      gap: ${spacing('8')};
    `
  }

  return css`
    & > *:nth-child(1) {
      flex: 0 0 auto;
      margin-right: auto;
    }

    & > *:nth-child(2) {
      flex: 0 1 auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    & > *:nth-child(3) {
      flex: 0 0 auto;
      margin-left: auto;
    }
  `
}

export const StyledFooter = styled.div<StyledFooterProps>`
  display: flex;
  align-items: center;
  margin-top: ${({ $isStandard }) => spacing($isStandard ? '4' : '8')};
  padding: 0 ${spacing('1')};

  ${({ $isFullWidth, $isStandard }) =>
    $isFullWidth
      ? css`
          position: relative;
          // Lift the footer's upward-opening "rows per page" dropdown above the
          // sticky table header (header tier), while staying below floating
          // overlays such as the DatePicker FloatingBox (dropdown + 1).
          z-index: ${zIndex('dropdown', 0)};

          ${getFullWidthLayout($isStandard)}
        `
      : css`
          justify-content: space-between;
          position: absolute;
          bottom: -${spacing('8')};
          transform: translateY(100%);
          width: max-content;
          gap: ${spacing('8')};

          & > * {
            flex: 0 0 auto;
          }
        `}
`
