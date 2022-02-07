import styled, { css } from 'styled-components'

interface StyledTooltipProps {
  $bottom?: number
  $left?: number
  $right?: number
  $top?: number
  $width?: number
}

function getUnitAsPx($unit: number | undefined) {
  return $unit ? `${$unit}px` : 'auto'
}

export const StyledTooltip = styled.div<StyledTooltipProps>`
  position: absolute;

  ${({ $bottom, $left, $right, $top, $width }) => css`
    bottom: ${getUnitAsPx($bottom)};
    left: ${getUnitAsPx($left)};
    right: ${getUnitAsPx($right)};
    top: ${getUnitAsPx($top)};
    width: ${getUnitAsPx($width)};
  `}
`
