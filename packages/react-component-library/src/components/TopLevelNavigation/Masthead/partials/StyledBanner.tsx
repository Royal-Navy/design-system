import { rgba } from 'polished'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { MAIN_HEIGHT } from './constants'
import { ACTIVE_TAB_BORDER } from '../../../TabBase/partials/StyledTab'

const { color, spacing } = selectors

export const StyledBanner = styled.div<{ $withInlineNav?: boolean }>`
  display: flex;
  align-items: center;
  height: ${MAIN_HEIGHT};
  padding: ${spacing('10')};
  font-weight: 700;
  border-bottom: ${(props) =>
    props.$withInlineNav ? ACTIVE_TAB_BORDER : 'inherit'};

  padding-right: ${(props) => (props.$withInlineNav ? spacing('13') : '0')};

  & > a {
    text-decoration: none;
    color: ${color('action', '900')};

    &:hover {
      text-decoration: none;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${rgba(color('action', '700'), 0.5)};
    }
  }
`
