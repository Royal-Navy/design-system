import React, { useState, Children } from 'react'

import { TabProps, TabContent, TabItem } from '.'

interface TabSetProps {
  className?: string
  children?: React.ReactElement<TabProps>[]
  onChangeCallback?: (id: number, title: string) => void
}

export const TabSet: React.FC<TabSetProps> = ({
  className = '',
  children,
  onChangeCallback,
}) => {
  const [activeTab, setActiveTab] = useState(0)

  function handleClick(index: number, title: string) {
    setActiveTab(index)

    if (onChangeCallback) {
      onChangeCallback(activeTab, title)
    }
  }

  return (
    <article className={`rn-tab-set ${className}`}>
      <header className="rn-tab-set__head">
        <nav>
          <ol className="rn-tab-set__tabs">
            {Children.map(children, ({ props }, index: number) => (
              <TabItem
                onClick={() => handleClick(index, props.title)}
                isActive={index === activeTab}
                index={index}
              >
                {props.title}
              </TabItem>
            ))}
          </ol>
        </nav>
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
