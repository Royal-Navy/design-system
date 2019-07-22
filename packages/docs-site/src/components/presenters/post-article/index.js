import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import PropTypes from 'prop-types'
import React from 'react'

import './post-article.scss'

const PostArticle = ({ mdx, className }) => {
  return (
    <article className={`post-article ${className}`}>
      <MDXRenderer>{mdx}</MDXRenderer>
    </article>
  )
}

PostArticle.propTypes = {
  className: PropTypes.string,
  mdx: PropTypes.string.isRequired,
}

PostArticle.defaultProps = {
  className: '',
}

export default PostArticle
