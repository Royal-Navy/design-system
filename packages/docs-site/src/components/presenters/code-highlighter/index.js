import React, { useEffect, useState } from 'react'
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

  const [copyLabel, setCopyLabel] = useState('Copy code')

  function copyToClipboard() {
    const textarea = document.createElement('textarea')

    textarea.innerText = source
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    setCopyLabel('Code copied')
  }

  return (
    <article className="code-highlighter">
      <header className="code-highlighter__head" data-testid="example">
        {example}
      </header>
      <section className="code-highlighter__body">
        {document.queryCommandSupported('copy') && (
          <button
            type="button"
            onClick={copyToClipboard}
            className="code-highlighter__copy"
            data-testid="copy"
          >
            <CopyIcon />
            {copyLabel}
          </button>
        )}
        <div className="code-highlighter__source">
          <pre className="line-numbers">
            <code className={`language-${language}`}>{`${source}`}</code>
          </pre>
        </div>
      </section>
    </article>
  )
}

CodeHighlighter.propTypes = {
  example: PropTypes.instanceOf(Object),
  source: PropTypes.string,
  language: PropTypes.string,
}

CodeHighlighter.defaultProps = {
  example: {},
  source: '// No source to display',
  language: 'javascript',
}

export default CodeHighlighter
