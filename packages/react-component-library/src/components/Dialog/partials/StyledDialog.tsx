import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Modal } from '../../Modal'
import { StyledButton } from '../../Button/partials/StyledButton'
import { StyledFooter } from '../../Modal/partials/StyledFooter'
import { StyledIcon } from '../../Button/partials/StyledIcon'
import { StyledMain } from '../../Modal/partials/StyledMain'
import { StyledPrimaryButton } from '../../Modal/partials/StyledPrimaryButton'
import { StyledTertiaryButton } from '../../Modal/partials/StyledTertiaryButton'

const { mq, spacing } = selectors

export const StyledDialog = styled(Modal)`
  ${StyledMain} {
    ${mq({ gte: 'xs' })`
      width: 100%;
      max-width: 480px;
    `}
  }

  ${StyledFooter} {
    ${StyledButton} {
      display: block;
      width: 100%;

      ${mq({ gte: 'xs' })`
        width: auto;
      `}
    }

    ${StyledIcon} {
      transform: translateY(2px);
    }

    ${StyledPrimaryButton} {
      margin-left: 0;
    }

    ${StyledTertiaryButton} {
      margin-top: ${spacing('4')};

      ${mq({ gte: 'xs' })`
        margin-top: 0;
      `}
    }
  }
`
