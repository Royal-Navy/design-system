import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import './code-highlighter.scss'

const CodeHighlighter = ({ example, source, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article className="code-highlighter">
      <div className="code-highlighter__head">
        {example}
        Pariatur cillum deserunt ex labore adipisicing ad eu minim consequat
        proident voluptate. Officia consectetur minim irure excepteur tempor ea
        mollit. Velit in sint consectetur adipisicing. Lorem nostrud anim
        pariatur aliqua excepteur minim commodo nostrud laboris enim tempor do
        irure.
      </div>
      <div className="code-highlighter__body">
        <button type="button" className="code-highlighter__copy">
          Copy code
        </button>
        <div className="code-highlighter__source">
          <pre className="line-numbers">
            <code className={`language-${language}`}>{`${source}`}</code>
          </pre>
        </div>
      </div>
    </article>
  )
}

CodeHighlighter.propTypes = {
  example: PropTypes.string,
  source: PropTypes.string,
  language: PropTypes.string,
}

CodeHighlighter.defaultProps = {
  example: '',
  source: '// No source to display',
  language: 'javascript',
}

export default CodeHighlighter
