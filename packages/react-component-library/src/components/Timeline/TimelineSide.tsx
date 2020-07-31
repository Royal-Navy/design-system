import React from 'react'

export interface TimelineSideProps extends ComponentWithClass {
  rowGroups?: any[]
  headChildren?: any[]
}

// component is deprecated
export const TimelineSide: React.FC<TimelineSideProps> = () => <></>

TimelineSide.displayName = 'TimelineSide'
