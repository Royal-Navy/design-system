import React, { Children, useState } from 'react'
import classNames from 'classnames'

import { TabContent, TabItem, TabProps } from '.'
import { ScrollButton } from './ScrollButton'
import { useScrollableTabSet } from './useScrollableTabSet'
import { SCROLL_DIRECTION } from './constants'

interface TabSetProps {
  className?: string
  children: React.ReactElement<TabProps>[]
  onChangeCallback?: (id: number) => void
  scrollable?: boolean
}

export const TabSet: React.FC<TabSetProps> = ({
  className = '',
  children,
  onChangeCallback,
  scrollable,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const { scrollToNextTab, tabsRef, itemsRef } = useScrollableTabSet(children)

  function handleClick(index: number) {
    setActiveTab(index)

    if (onChangeCallback) {
      onChangeCallback(index)
    }
  }

  const articleClasses = classNames('rn-tab-set', className, {
    'is-scrollable': scrollable,
  })

  return (
    <article className={articleClasses} data-testid="tab-set">
      <header className="rn-tab-set__head">
        {scrollable && (
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
                active={index === activeTab}
                index={index}
                scrollable={scrollable}
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
        {scrollable && (
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
