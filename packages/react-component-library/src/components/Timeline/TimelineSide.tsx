import React from 'react'
import { IconChevronRight, IconChevronLeft } from '@royalnavy/icon-library'
import { startCase } from 'lodash'

import { Button } from '../Button'
import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TIMELINE_ACTIONS } from './context/types'
import { PropsWithClassName } from '../../types/PropsWithClassName'

export interface TimelineSideProps extends PropsWithClassName {
  rowGroups?: any[]
  headChildren?: any[]
}

const TimelineSideList: React.FC<TimelineSideProps> = ({
  rowGroups,
  headChildren,
}) => {
  return (
    <ol className="timeline__side-list">
      {headChildren.map(({ type: { displayName } }, index) => {
        const name = displayName.toLowerCase().substring('timeline'.length)

        if (!['months', 'weeks', 'days'].includes(name)) return null

        const className = `timeline__side-${name}`
        return (
          <li className={className} key={getKey(className, index)}>
            <span className="timeline__side-title">{startCase(name)}</span>
          </li>
        )
      })}
      {rowGroups
        .flatMap((item) => item.rows)
        .map(({ name }, index) => {
          return (
            <li
              className="timeline__side-row"
              key={getKey('operation-side-row', index)}
              data-testid="timeline-side-row"
            >
              <span className="timeline__side-title">{name}</span>
            </li>
          )
        })}
    </ol>
  )
}

export const TimelineSide: React.FC<TimelineSideProps> = ({
  rowGroups,
  headChildren,
}) => {
  return (
    <TimelineContext.Consumer>
      {({ dispatch }) => {
        return (
          <aside className="timeline__side">
            <div className="timeline__navigation">
              <Button
                variant="secondary"
                icon={<IconChevronLeft />}
                onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_PREV })}
                data-testid="timeline-side-button-left"
              />
              <Button
                variant="secondary"
                icon={<IconChevronRight />}
                onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_NEXT })}
                data-testid="timeline-side-button-right"
              />
            </div>
            <TimelineSideList
              rowGroups={rowGroups}
              headChildren={headChildren}
            />
          </aside>
        )
      }}
    </TimelineContext.Consumer>
  )
}

TimelineSide.displayName = 'TimelineSide'
