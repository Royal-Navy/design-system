import { styled } from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { Select } from '../../Select'
import { StyledInput } from '../../SelectBase/partials/StyledInput'

interface StyledSelectProps {
  $maxLength: number
}

const INPUT_PADDING_LEFT = spacing('6')

export const StyledSelect = styled(Select)<StyledSelectProps>`
  ${StyledInput} {
    padding-left: ${INPUT_PADDING_LEFT};
    width: calc(${({ $maxLength }) => $maxLength}ch + ${INPUT_PADDING_LEFT});
  }
`
