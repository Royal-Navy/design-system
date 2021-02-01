import React, { Children, useState, KeyboardEvent } from 'react'
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
} from '@royalnavy/icon-library'

import { Tab, TabContent, TabItem, TabProps } from '.'
import { useScrollableTabSet } from './useScrollableTabSet'
import { SCROLL_DIRECTION } from './constants'
import { getId } from '../../helpers'
import { StyledTabSet } from './partials/StyledTabSet'
import { StyledHeader } from './partials/StyledHeader'
import { StyledNavigation } from './partials/StyledNavigation'
import { StyledTabs } from './partials/StyledTabs'
import { StyledBody } from './partials/StyledBody'
import { StyledScrollRight } from './partials/StyledScrollRight'
import { StyledScrollLeft } from './partials/StyledScrollLeft'

interface TabSetProps {
  className?: string
  children: React.ReactElement<TabProps>[]
  onChange?: (id: number) => void
  isScrollable?: boolean
}

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

export const TabSet: React.FC<TabSetProps> = ({
  className,
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

  return (
    <StyledTabSet
      $isScrollable={isScrollable}
      className={className}
      data-testid="tab-set"
      {...rest}
    >
      <StyledHeader $isScrollable={isScrollable}>
        {isScrollable && (
          <StyledScrollLeft
            aria-label={`Scroll ${SCROLL_DIRECTION.LEFT}`}
            onClick={scrollToNextTab((currentTabIndex) => currentTabIndex - 1)}
            data-testid={`scroll-${SCROLL_DIRECTION.LEFT}`}
          >
            <IconKeyboardArrowLeft />
          </StyledScrollLeft>
        )}
        <StyledNavigation
          $isScrollable={isScrollable}
          ref={tabsRef}
          data-testid="tabs"
        >
          <StyledTabs role="tablist" data-testid="tab-set-list">
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
          </StyledTabs>
        </StyledNavigation>
        {isScrollable && (
          <StyledScrollRight
            aria-label={`Scroll ${SCROLL_DIRECTION.RIGHT}`}
            onClick={scrollToNextTab((currentTabIndex) => currentTabIndex + 1)}
            data-testid={`scroll-${SCROLL_DIRECTION.RIGHT}`}
          >
            <IconKeyboardArrowRight />
          </StyledScrollRight>
        )}
      </StyledHeader>
      <StyledBody $isScrollable={isScrollable}>
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
      </StyledBody>
    </StyledTabSet>
  )
}

TabSet.displayName = 'TabSet'
