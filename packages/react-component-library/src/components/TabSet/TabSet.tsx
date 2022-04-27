import React, { Children, KeyboardEvent, MouseEvent, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@defencedigital/icon-library'
import { v4 as uuidv4 } from 'uuid'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { SCROLL_DIRECTION } from './constants'
import { StyledBody } from './partials/StyledBody'
import { StyledHeader } from './partials/StyledHeader'
import { StyledNavigation } from './partials/StyledNavigation'
import { StyledScrollLeft } from './partials/StyledScrollLeft'
import { StyledScrollRight } from './partials/StyledScrollRight'
import { StyledTabs } from '../TabBase/partials/StyledTabs'
import { StyledTabSet } from './partials/StyledTabSet'
import { TabSetItem, TabContent, TabItem, TabSetItemProps } from '.'
import { useScrollableTabSet } from './useScrollableTabSet'

type OnChangeEventType =
  | KeyboardEvent<HTMLLIElement>
  | KeyboardEvent<HTMLButtonElement>
  | MouseEvent<HTMLButtonElement>

export interface TabSetProps extends ComponentWithClass {
  /**
   * Collection of `Tab` components that make up the tab set.
   */
  children: React.ReactElement<TabSetItemProps>[]
  /**
   * Optional handler invoked when the currently selected tab is changed.
   */
  onChange?: (e: OnChangeEventType, id: number) => void
  /**
   * Toggles whether to display the tab set full width.
   */
  isFullWidth?: boolean
  /**
   * Toggles whether to render the scrollable variant of the component.
   */
  isScrollable?: never
}

export interface ScrollableTabSetProps extends ComponentWithClass {
  /**
   * Collection of `Tab` components that make up the tab set.
   */
  children: React.ReactElement<TabSetItemProps>[]
  /**
   * Optional handler invoked when the currently selected tab is changed.
   */
  onChange?: (e: OnChangeEventType, id: number) => void
  /**
   * Toggles whether to display the tab set full width.
   */
  isFullWidth?: never
  /**
   * Toggles whether to render the scrollable variant of the component.
   */
  isScrollable?: boolean
}

export const TabSet: React.FC<TabSetProps | ScrollableTabSetProps> = ({
  className,
  children,
  onChange,
  isFullWidth,
  isScrollable,
  ...rest
}) => {
  function getActiveIndex(tabs: React.ReactNode | React.ReactNode[]): number {
    const activeIndex = Children.toArray(tabs).findIndex(
      (item: React.ReactNode) => {
        if (React.isValidElement(item)) {
          return item.props.isActive
        }

        return false
      }
    )

    return activeIndex === -1 ? 0 : activeIndex
  }

  const [tabIds] = useState(() =>
    [...Array(children.length)].map(() => `${uuidv4()}`)
  )
  const [activeTab, setActiveTab] = useState(getActiveIndex(children))
  const { scrollToNextTab, tabsRef, itemsRef } = useScrollableTabSet(children)

  function handleClick(e: OnChangeEventType, index: number) {
    setActiveTab(index)

    if (onChange) {
      onChange(e, index)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keyMap = {
      ArrowLeft: activeTab === 0 ? children.length - 1 : activeTab - 1,
      ArrowRight: activeTab === children.length - 1 ? 0 : activeTab + 1,
    }
    const { key } = event

    if (key in keyMap) {
      const index = keyMap[key]
      handleClick(event, index)
    }
  }

  return (
    <StyledTabSet className={className} data-testid="tab-set" {...rest}>
      <StyledHeader $isScrollable={isScrollable}>
        {isScrollable && (
          <StyledScrollLeft
            aria-label={`Scroll ${SCROLL_DIRECTION.LEFT}`}
            onClick={scrollToNextTab((currentTabIndex) => currentTabIndex - 1)}
            data-testid={`scroll-${SCROLL_DIRECTION.LEFT}`}
          >
            <IconChevronLeft size={36} />
          </StyledScrollLeft>
        )}
        <StyledNavigation
          $isScrollable={isScrollable}
          ref={tabsRef}
          data-testid="tabs"
        >
          <StyledTabs role="tablist" data-testid="tab-set-list">
            {Children.map(
              children,
              ({ props }: React.ReactElement, index: number) => (
                <TabItem
                  tabId={tabIds[index]}
                  onClick={(e: MouseEvent<HTMLButtonElement>) =>
                    handleClick(e, index)
                  }
                  onKeyDown={handleKeyDown}
                  isActive={index === activeTab}
                  isFullWidth={isFullWidth}
                  isScrollable={isScrollable}
                  ref={(el) => {
                    itemsRef.current[index] = el
                    return itemsRef.current[index]
                  }}
                >
                  {props.title}
                </TabItem>
              )
            )}
          </StyledTabs>
        </StyledNavigation>
        {isScrollable && (
          <StyledScrollRight
            aria-label={`Scroll ${SCROLL_DIRECTION.RIGHT}`}
            onClick={scrollToNextTab((currentTabIndex) => currentTabIndex + 1)}
            data-testid={`scroll-${SCROLL_DIRECTION.RIGHT}`}
          >
            <IconChevronRight size={36} />
          </StyledScrollRight>
        )}
      </StyledHeader>
      <StyledBody $isScrollable={isScrollable}>
        {Children.map(
          children,
          (child: React.ReactElement<TabSetItemProps>, index: number) => {
            const {
              children: tabChildren,
              title,
              isActive: _,
              ...tabRest
            } = child.props

            return (
              <TabContent
                tabId={tabIds[index]}
                isActive={index === activeTab}
                {...tabRest}
              >
                <TabSetItem title={title}>{tabChildren}</TabSetItem>
              </TabContent>
            )
          }
        )}
      </StyledBody>
    </StyledTabSet>
  )
}

TabSet.displayName = 'TabSet'
