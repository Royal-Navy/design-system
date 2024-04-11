import styled from 'styled-components'
import { ACTIVE_TAB_BORDER } from '../../../TabBase/partials/StyledTab'

export const StyledOptions = styled.div<{ $withInlineNav?: boolean }>`
  display: flex;
  a:hover {
    text-decoration: none;
  }
  height: 58px;
  overflow: hidden;
  border-bottom: ${(props) =>
    props.$withInlineNav ? ACTIVE_TAB_BORDER : 'inherit'};
`
