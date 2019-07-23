import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import PropTypes from 'prop-types'
import React from 'react'

import './post-article.scss'

const PostArticle = ({ mdx, className, title, description }) => {
  return (
    <article className={`post-article ${className}`}>
      <div className="post-article__header">
        <h1 className="post-article__title">{title}</h1>
        <p className="post-article__lede">{description}</p>
      </div>
      <MDXRenderer>{mdx}</MDXRenderer>
    </article>
  )
}

PostArticle.propTypes = {
  className: PropTypes.string,
  mdx: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

PostArticle.defaultProps = {
  className: '',
}

export default PostArticle
