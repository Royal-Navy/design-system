import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledClassificationBar } from './partials/StyledClassificationBar'

export interface ClassificationProps extends ComponentWithClass {
  /**
   * Toggles whether the classification is secret or not.
   */
  isSecret?: boolean
  /**
   * Toggles the styles for when the sidebar is condensed.
   */
  inSidebar?: boolean
  /**
   * Toggles whether the classification bar is condensed.
   */
  isCondensed?: boolean
}

function getClassificationText({ isSecret, isCondensed }: ClassificationProps) {
  if (isSecret) {
    return 'Secret'
  }

  if (isCondensed) {
    return 'OS'
  }

  return 'Official Sensitive'
}

export const ClassificationBar = ({
  isSecret,
  inSidebar,
  isCondensed,
  ...rest
}: ClassificationProps) => {
  const classificationText = getClassificationText({ isSecret, isCondensed })

  return (
    <StyledClassificationBar
      $isSecret={isSecret}
      $inSidebar={inSidebar}
      {...rest}
    >
      {classificationText}
    </StyledClassificationBar>
  )
}

ClassificationBar.displayName = 'ClassificationBar'
