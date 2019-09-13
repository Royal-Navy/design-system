import React, { SVGProps } from 'react'

const SvgSentimentVeryDissatisfied = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sentiment-very-dissatisfied_svg__a"
        d="M7.993 1.333A6.66 6.66 0 001.333 8a6.66 6.66 0 006.66 6.667 6.666 6.666 0 100-13.333zm.007 12A5.332 5.332 0 012.667 8 5.332 5.332 0 018 2.667 5.332 5.332 0 0113.333 8 5.332 5.332 0 018 13.333zm2.787-8.16l-.707.707-.707-.707-.706.707.706.707-.706.706.706.707.707-.707.707.707.706-.707-.706-.706.706-.707-.706-.707zM5.213 8l.707-.707.707.707.706-.707-.706-.706.706-.707-.706-.707-.707.707-.707-.707-.706.707.706.707-.706.706.706.707zM8 9.333a3.664 3.664 0 00-3.407 2.334h6.814A3.664 3.664 0 008 9.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sentiment-very-dissatisfied_svg__b" fill="#fff">
        <use xlinkHref="#sentiment-very-dissatisfied_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sentiment-very-dissatisfied_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSentimentVeryDissatisfied
