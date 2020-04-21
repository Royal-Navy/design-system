import React from 'react'

import { EventProps } from '.'

export interface EventsProps extends ComponentWithClass {
  children:
    | React.ReactElement<EventProps>
    | React.ReactElement<EventProps>[]
}

export const Events: React.FC<EventsProps> = (props) => {
  return (
    <div {...props} />
  )
}
