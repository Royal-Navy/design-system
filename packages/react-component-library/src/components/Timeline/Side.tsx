import React from 'react'
import { IconChevronRight, IconChevronLeft } from '@royalnavy/icon-library'

import { Button } from '../Button'
import { getKey } from './helpers'
import { TimelineContext } from './context'
import { TIMELINE_ACTIONS } from './context/types'

export interface SideProps extends ComponentWithClass {
  rowData?: any[]
}

const SideList: React.FC<SideProps> = ({ rowData }) => {
  return (
    <ol className="timeline__side-list">
      <li className="timeline__side-months">
        <span className="timeline__side-title">Months</span>
      </li>
      <li className="timeline__side-weeks">
        <span className="timeline__side-title">Weeks</span>
      </li>
      {rowData &&
        rowData.map(({ name }, index) => {
          return (
            <li
              className="timeline__side-row"
              key={getKey('operation-side-row', index)}
              data-testid="side-row"
            >
              <span className="timeline__side-title">{name}</span>
            </li>
          )
        })}
    </ol>
  )
}

export const Side: React.FC<SideProps> = ({ rowData }) => {
  return (
    <TimelineContext.Consumer>
      {({ dispatch }) => {
        return (
          <aside className="timeline__side">
            <div className="timeline__navigation">
              <Button
                variant="secondary"
                icon={<IconChevronLeft />}
                onClick={_ => dispatch({ type: TIMELINE_ACTIONS.GET_PREV })}
                data-testid="side-button-left"
              />
              <Button
                variant="secondary"
                icon={<IconChevronRight />}
                onClick={_ => dispatch({ type: TIMELINE_ACTIONS.GET_NEXT })}
                data-testid="side-button-right"
              />
            </div>
            <SideList rowData={rowData} />
          </aside>
        )
      }}
    </TimelineContext.Consumer>
  )
}

Side.displayName = 'Side'
