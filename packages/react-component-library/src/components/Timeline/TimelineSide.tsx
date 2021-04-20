import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface TimelineSideProps extends ComponentWithClass {
  /**
   * @private
   */
  rowGroups?: any[]
  /**
   * @private
   */
  headChildren?: any[]
}

/**
 * @deprecated
 */
export const TimelineSide: React.FC<TimelineSideProps> = () => <></>

TimelineSide.displayName = 'TimelineSide'
