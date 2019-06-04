import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import './code-highlighter.scss'

import CopyIcon from './copy-icon.svg'

const CodeHighlighter = ({ example, source, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article className="code-highlighter">
      <div className="code-highlighter__head">{example}</div>
      <div className="code-highlighter__body">
        <button type="button" className="code-highlighter__copy">
          <CopyIcon />
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
