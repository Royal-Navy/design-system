import React, { useState } from 'react'
import { SingleValueProps } from 'react-select/src/components/SingleValue'

import { BADGE_SIZE } from '../Badge'
import { StyledBadge } from './partials/StyledBadge'
import { SelectOptionWithBadgeType } from './Option'
import { StyledSingleValue } from './partials/StyledSingleValue'
import { StyledSingleValueLabel } from './partials/StyledSingleValueLabel'
import { FloatingBox } from '../../primitives/FloatingBox'
import { useStatefulRef } from '../../hooks/useStatefulRef'
import { StyledTooltip } from './partials/StyledTooltip'

export const SingleValue: React.FC<
  SingleValueProps<SelectOptionWithBadgeType>
> = ({ children, ...props }) => {
  const [floatingBoxTarget, setFloatingBoxTarget] = useStatefulRef()
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const { badge } = props.data

  return (
    <>
      <StyledSingleValue data-testid="select-single-value" {...props}>
        <StyledSingleValueLabel
          data-testid="select-single-value-label"
          onMouseEnter={(_) => setShowTooltip(true)}
          onMouseLeave={(_) => setShowTooltip(false)}
          ref={setFloatingBoxTarget}
        >
          {children}
        </StyledSingleValueLabel>
        {badge && <StyledBadge size={BADGE_SIZE.XSMALL}>{badge}</StyledBadge>}
      </StyledSingleValue>
      <FloatingBox
        placement="bottom"
        scheme="dark"
        isVisible={showTooltip}
        targetElement={floatingBoxTarget}
      >
        <StyledTooltip>{children}</StyledTooltip>
      </FloatingBox>
    </>
  )
}
