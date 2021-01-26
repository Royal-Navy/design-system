import React, { Children, useState, KeyboardEvent } from 'react'
import classNames from 'classnames'

import { Tab, TabContent, TabItem, TabProps } from '.'
import { ScrollButton } from './ScrollButton'
import { useScrollableTabSet } from './useScrollableTabSet'
import { SCROLL_DIRECTION } from './constants'
import { getId } from '../../helpers'

interface TabSetProps {
  className?: string
  children: React.ReactElement<TabProps>[]
  onChange?: (id: number) => void
  isScrollable?: boolean
}

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

export const TabSet: React.FC<TabSetProps> = ({
  className = '',
  children,
  onChange,
  isScrollable,
  ...rest
}) => {
  const [tabIds] = useState(
    Array.from({ length: children.length }).map(() => getId('tab-content'))
  )

  const [activeTab, setActiveTab] = useState(0)
  const { scrollToNextTab, tabsRef, itemsRef } = useScrollableTabSet(children)

  function handleClick(index: number) {
    setActiveTab(index)

    if (onChange) {
      onChange(index)
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLLIElement>) {
    const { which } = event

    const getNextIndex = (keyCode: number): number => {
      const index = {
        [LEFT_ARROW]: activeTab === 0 ? children.length - 1 : activeTab - 1,
        [RIGHT_ARROW]: activeTab === children.length - 1 ? 0 : activeTab + 1,
      }

      return index[keyCode]
    }

    if ([LEFT_ARROW, RIGHT_ARROW].includes(which)) {
      const index = getNextIndex(which)
      handleClick(index)
    }
  }

  const articleClasses = classNames('rn-tab-set', className, {
    'is-scrollable': isScrollable,
  })

  return (
    <article className={articleClasses} data-testid="tab-set" {...rest}>
      <header className="rn-tab-set__head">
        {isScrollable && (
          <ScrollButton
            direction={SCROLL_DIRECTION.LEFT}
            onClick={scrollToNextTab((currentTabIndex) => currentTabIndex - 1)}
          />
        )}
        <div
          className="rn-tab-set__navigation"
          ref={tabsRef}
          data-testid="tabs"
        >
          <ol
            className="rn-tab-set__tabs"
            role="tablist"
            data-testid="tab-set-list"
          >
            {Children.map(children, ({ props }, index: number) => (
              <TabItem
                tabId={tabIds[index]}
                onClick={() => handleClick(index)}
                onKeyDown={handleKeyDown}
                isActive={index === activeTab}
                index={index}
                isScrollable={isScrollable}
                ref={(el) => {
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
            onClick={scrollToNextTab((currentTabIndex) => currentTabIndex + 1)}
          />
        )}
      </header>
      <div className="rn-tab-set__body">
        {Children.map(
          children,
          (child: React.ReactElement<TabProps>, index: number) => {
            const { children: tabChildren, title, ...tabRest } = child.props

            return (
              <TabContent
                tabId={tabIds[index]}
                isActive={index === activeTab}
                {...tabRest}
              >
                <Tab title={title}>{tabChildren}</Tab>
              </TabContent>
            )
          }
        )}
      </div>
    </article>
  )
}

TabSet.displayName = 'TabSet'
