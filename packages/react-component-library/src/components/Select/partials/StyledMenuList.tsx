import { components } from 'react-select'
import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

const { spacing } = selectors

export const StyledMenuList = styled(components.MenuList)`
  padding-left: ${spacing('2')};
  padding-right: ${spacing('2')};
`
