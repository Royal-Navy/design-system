import React, { Children, useState } from 'react'
import classNames from 'classnames'

import { TabContent, TabItem, TabProps } from '.'
import { ScrollButton } from './ScrollButton'
import { useScrollableTabSet } from './useScrollableTabSet'
import { SCROLL_DIRECTION } from './constants'

interface TabSetProps {
  className?: string
  children: React.ReactElement<TabProps>[]
  onChange?: (id: number) => void
  isScrollable?: boolean
}

export const TabSet: React.FC<TabSetProps> = ({
  className = '',
  children,
  onChange,
  isScrollable,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const { scrollToNextTab, tabsRef, itemsRef } = useScrollableTabSet(children)

  function handleClick(index: number) {
    setActiveTab(index)

    if (onChange) {
      onChange(index)
    }
  }

  const articleClasses = classNames('rn-tab-set', className, {
    'is-scrollable': isScrollable,
  })

  return (
    <article className={articleClasses} data-testid="tab-set">
      <header className="rn-tab-set__head">
        {isScrollable && (
          <ScrollButton
            direction={SCROLL_DIRECTION.LEFT}
            onClick={scrollToNextTab(currentTabIndex => currentTabIndex - 1)}
          />
        )}
        <div
          className="rn-tab-set__navigation"
          ref={tabsRef}
          data-testid="tabs"
        >
          <ol className="rn-tab-set__tabs">
            {Children.map(children, ({ props }, index: number) => (
              <TabItem
                onClick={() => handleClick(index)}
                isActive={index === activeTab}
                index={index}
                isScrollable={isScrollable}
                ref={el => {
                  itemsRef.current[index] = el
                  return itemsRef.current[index]
                }}
              >
                {props.title}
              </TabItem>
            ))}
          </ol>
        </div>
        {isScrollable && (
          <ScrollButton
            direction={SCROLL_DIRECTION.RIGHT}
            onClick={scrollToNextTab(currentTabIndex => currentTabIndex + 1)}
          />
        )}
      </header>
      <div className="rn-tab-set__body">
        {Children.map(
          children,
          (child: React.ReactElement<TabProps>, index: number) => (
            <TabContent isActive={index === activeTab}>{child}</TabContent>
          )
        )}
      </div>
    </article>
  )
}

TabSet.displayName = 'TabSet'
