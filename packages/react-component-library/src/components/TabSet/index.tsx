import React, { useState } from 'react'
import uuid from 'uuid'

interface TabSetProps {
  className?: string
  tabs: any[]
}

const TabSet: React.FC<TabSetProps> = ({ className = '', tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

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
                  data-tab-id={index}
                  className={`rn-tab-set__tab-item ${
                    index === activeTab ? 'is-active' : ''
                  }`}
                  data-testid="tab"
                >
                  <button
                    className="rn-tab-set__tab"
                    onClick={() => setActiveTab(index)}
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
      <div className="rn-tab-set__body">
        {tabs.map((tab, index) => {
          const { content } = tab

          return (
            <div
              key={uuid()}
              data-tab-id={index}
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
    </article>
  )
}

export default TabSet
