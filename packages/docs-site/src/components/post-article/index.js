import PropTypes from 'prop-types'
import React from 'react'
import rehypeReact from 'rehype-react'

import './post-article.scss'
import './post-md.scss'

import ContentBox from '../content-box'
// ...

const PostArticle = ({ postData, className, children }) => {
  // Register components which are referenced in markdown

  // eslint-disable-next-line new-cap
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'content-box': ContentBox,
      // ...
    },
  }).Compiler

  return (
    <article className={`post-article ${className}`}>
      <div className="post-article__content">
        <div className="post-article__copy post-md">
          {postData && renderAst(postData.htmlAst)}
        </div>
        <nav className="post-article__links" />
      </div>
      {children && <div className="post-article__children">{children}</div>}
    </article>
  )
}

PostArticle.propTypes = {
  className: PropTypes.string,
  postData: PropTypes.instanceOf(Object),
  children: PropTypes.instanceOf(Array),
}

PostArticle.defaultProps = {
  className: '',
  postData: {},
  children: [],
}

export default PostArticle
