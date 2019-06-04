import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import './code-highlighter.scss'

const CodeHighlighter = ({ example, source, language }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block)
      })
    }, 0)
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
            <code>{`${source}`}</code>
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
