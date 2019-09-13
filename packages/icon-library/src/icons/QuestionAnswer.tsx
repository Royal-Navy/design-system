import React, { SVGProps } from 'react'

const SvgQuestionAnswer = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="question-answer_svg__a"
        d="M14 4h-1.333v6H4v1.333c0 .367.3.667.667.667H12l2.667 2.667v-10c0-.367-.3-.667-.667-.667zm-2.667 4V2c0-.367-.3-.667-.666-.667H2c-.367 0-.667.3-.667.667v9.333L4 8.667h6.667c.366 0 .666-.3.666-.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="question-answer_svg__b" fill="#fff">
        <use xlinkHref="#question-answer_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#question-answer_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgQuestionAnswer
