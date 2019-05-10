import PropTypes from 'prop-types'
import React from 'react'
import rehypeReact from 'rehype-react'

// import './post-article.scss'
// import './post-md.scss'

// Import components
import NoteBlock from '../note-block'
import InfoBox from '../info-box'
import GridContainer from '../grid-container'
import ContentBox from '../content-box'

const Homepage = ({ postData, className }) => {
  // Register any components which are to be available in this template via markdown

  // eslint-disable-next-line new-cap
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'note-block': NoteBlock,
      'info-box': InfoBox,
      'grid-container': GridContainer,
      'content-box': ContentBox,
    },
  }).Compiler

  return (
    <article className={`${className} grid-container container`}>
      {postData && renderAst(postData.htmlAst)}
    </article>
  )
}

Homepage.propTypes = {
  className: PropTypes.string,
  postData: PropTypes.instanceOf(Object),
}

Homepage.defaultProps = {
  className: '',
  postData: {},
}

export default Homepage
