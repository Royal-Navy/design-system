import React, { useState } from 'react'
import uuid from 'uuid'

interface TabSetProps {
  className?: string
  tabs: any[]
  onChangeCallback?: (id: number, title: string) => void
}

const TabSet: React.FC<TabSetProps> = ({
  className = '',
  tabs,
  onChangeCallback,
}) => {
  const [activeTab, setActiveTab] = useState(0)

  function handleClick(index: number, title: string) {
    setActiveTab(index)

    if (typeof onChangeCallback === 'function') {
      onChangeCallback(activeTab, title)
    }
  }

  return (
    <article className={`rn-tab-set ${className}`}>
      <header className="rn-tab-set__head">
        <nav>
          <ol className="rn-tab-set__tabs">
            {tabs.map((tab, index) => {
              const { title } = tab

              return (
                <li
                  key={uuid()}
                  className={`rn-tab-set__tab-item ${
                    index === activeTab ? 'is-active' : ''
                  }`}
                  data-testid="tab"
                >
                  <button
                    className="rn-tab-set__tab"
                    onClick={() => handleClick(index, title)}
                    data-testid={`select-tab-${index}`}
                  >
                    {title}
                  </button>
                </li>
              )
            })}
          </ol>
        </nav>
      </header>
      {tabs.length >= 1 && Object.keys(tabs[0]).includes('content') && (
        <div className="rn-tab-set__body">
          {tabs.map((tab, index) => {
            const { content } = tab

            return (
              <div
                key={uuid()}
                className={`rn-tab-set__content ${
                  index === activeTab ? 'is-active' : ''
                }`}
                data-testid="content"
              >
                {content}
              </div>
            )
          })}
        </div>
      )}
    </article>
  )
}

export default TabSet
