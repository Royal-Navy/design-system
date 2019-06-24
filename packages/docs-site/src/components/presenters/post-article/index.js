import PropTypes from 'prop-types'
import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import './post-article.scss'

const PostArticle = ({ mdx, className, children }) => {
  return (
    <article className={`post-article ${className}`}>
      <div className="post-article__content">
        <div className="post-article__copy post-md">
          <MDXRenderer>{mdx}</MDXRenderer>
        </div>
        <nav className="post-article__links" />
      </div>
      {children && <div className="post-article__children">{children}</div>}
    </article>
  )
}

PostArticle.propTypes = {
  className: PropTypes.string,
  mdx: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Array),
}

PostArticle.defaultProps = {
  className: '',
  children: [],
}

export default PostArticle
