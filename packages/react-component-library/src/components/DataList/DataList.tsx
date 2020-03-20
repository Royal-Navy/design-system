import React from 'react'
import { IconKeyboardArrowDown } from '@royalnavy/icon-library'
import { Badge } from '@royalnavy/react-component-library'

export interface ComponentProps extends ComponentWithClass {
  //
}
export const DataList: React.FC<ComponentProps> = () => {
  return (
    <dl className="rn-data-list">
      <button className="rn-data-list__header">
        <h2 className="rn-data-list__title">
          Data List Title
          <Badge className="rn-data-list__badge" size="small">
            Item
          </Badge>
        </h2>
        <span className="rn-data-list__action">
          <IconKeyboardArrowDown />
        </span>
      </button>
      <div className="rn-data-list__sheet">
        <div className="rn-data-list__item">
          <dt className="rn-data-list__key">Name</dt>
          <dd className="rn-data-list__value">Horatio Nelson</dd>
        </div>
        <div className="rn-data-list__item">
          <dt className="rn-data-list__key">Age</dt>
          <dd className="rn-data-list__value">44</dd>
        </div>
        <div className="rn-data-list__item">
          <dt className="rn-data-list__key">Location</dt>
          <dd className="rn-data-list__value">Portsmouth</dd>
        </div>
        <div className="rn-data-list__item">
          <dt className="rn-data-list__key">Departure</dt>
          <dd className="rn-data-list__value">2230</dd>
        </div>
        <div className="rn-data-list__item">
          <dt className="rn-data-list__key">Water Temperature</dt>
          <dd className="rn-data-list__value">25C</dd>
        </div>
        <div className="rn-data-list__item">
          <dt className="rn-data-list__key">Wind Speed</dt>
          <dd className="rn-data-list__value">8Kts</dd>
        </div>
      </div>
    </dl>
  )
}
DataList.displayName = 'DataList'
