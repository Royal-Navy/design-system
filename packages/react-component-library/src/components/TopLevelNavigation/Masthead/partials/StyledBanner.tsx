import { rgba } from 'polished'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { MAIN_HEIGHT } from './constants'

const { color, spacing } = selectors

export const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  height: ${MAIN_HEIGHT};
  margin-left: ${spacing('10')};
  font-weight: 700;

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
