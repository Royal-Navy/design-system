import React, { SVGProps } from 'react'

const SvgSentimentVerySatisfied = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sentiment-very-satisfied_svg__a"
        d="M7.993 1.333A6.66 6.66 0 001.333 8a6.66 6.66 0 006.66 6.667 6.666 6.666 0 100-13.333zm.007 12A5.332 5.332 0 012.667 8 5.332 5.332 0 018 2.667 5.332 5.332 0 0113.333 8 5.332 5.332 0 018 13.333zm.667-6.706l.706.706.707-.706.707.706.706-.706-1.413-1.414-1.413 1.414zm-2.747 0l.707.706.706-.706L5.92 5.213 4.507 6.627l.706.706.707-.706zM8 11.667a3.664 3.664 0 003.407-2.334H4.593A3.664 3.664 0 008 11.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sentiment-very-satisfied_svg__b" fill="#fff">
        <use xlinkHref="#sentiment-very-satisfied_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sentiment-very-satisfied_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSentimentVerySatisfied
