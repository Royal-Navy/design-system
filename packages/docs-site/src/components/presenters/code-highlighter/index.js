import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import './code-highlighter.scss'

import hljs from 'highlight.js/lib/highlight'
import 'highlight.js/styles/github.css'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

const CodeHighlighter = ({ example, source, language }) => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
  }, [])

  return (
    <article className="code-highlighter">
      <div className="code-highlighter__head">{example}</div>
      <div className="code-highlighter__body">
        <button type="button" className="code-highlighter__copy">
          Copy code
        </button>
        <div className="code-highlighter__source">
          <pre className={language}>
            <code>{source}</code>
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
  source: '',
  language: 'javascript',
}

export default CodeHighlighter
