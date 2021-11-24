/* eslint-disable react/no-danger */
// Remove the above line if DOMPurify.sanitize is removed. DOMPurify protects against XSS.
import React, { useState } from "react";
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'
import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'

import { UpArrow } from './UpArrow'
import { DownArrow } from './DownArrow'
import { Space } from './Space'

const { color, spacing } = selectors

const AccordionTitleDiv = styled.div`
  font-size: ${selectors.fontSize('m')};
  font-weight: bold;
  line-height: ${spacing('11')};
  cursor: pointer;
  padding: ${spacing('4')} ${spacing('11')};
  border-top: solid 3px #ccc ;
  align-items: center;
  background-color: white;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  color: ${color('neutral', '600')};
  word-wrap: break-word;
  width: 800px;

  :hover {
    background-color: ${color('neutral', '100')};
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
`
const AccordionContentDiv = styled.div`
    font-size: ${selectors.fontSize('base')};
    margin-top: ${spacing('4')};
    margin-bottom: ${spacing('7')};
    margin-left: 38px;
    margin-right: ${spacing('7')};
    padding-right: ${spacing('7')};
    word-wrap: break-word;
    width: 710px;
    color: ${color('neutral', '400')};
`
const AccordionSummarySpan = styled.span`
  font-size: ${selectors.fontSize('base')};
  color: ${color('neutral', '400')};
  text-align: left;
  padding-left: ${spacing('8')};
`

const AccordionItemDiv = styled.div`
  overflow: hidden;
  transition: max-height 0.2s cubic-bezier(1, 0, 1, 0);
  height: auto;
  max-height: 9999px;
  border-width: 1px;
  background-color: white;
  width: 800px;
  a:hover {
    text-decoration: underline;
  }
`
export const Accordion =  ({
  title,
  contentAsHtml,
  summary,
  identifier
}: {
  title: string;
  contentAsHtml: string;
  summary: string;
  identifier: string;
})  => {
  const [isOpen, setOpen] = useState(false);
  const isSummaryItem = summary ? 'summaryItem' : '';

  return (
    <div>
      <AccordionTitleDiv
        data-testid={`Faq${identifier}`}
        role="button"
        tabIndex={0}
        id={identifier}
        onClick={() => setOpen(!isOpen)}
        onKeyPress={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
        >
          { isOpen ? <UpArrow /> : <DownArrow />  }
          <Space />
          <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
          <br/>
          { isSummaryItem 
            ? <AccordionSummarySpan>{summary}</AccordionSummarySpan>
            : null
          }
      </AccordionTitleDiv>
      { isOpen 
            ?
            <AccordionItemDiv>
            <AccordionContentDiv
              id={identifier}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contentAsHtml) }}
            />
          </AccordionItemDiv>
            
            : null
          }
    </div>
  )
}
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  contentAsHtml: PropTypes.string.isRequired,
  summary: PropTypes.string,
}

Accordion.defaultProps  = {
  summary: "",
}

export default Accordion;