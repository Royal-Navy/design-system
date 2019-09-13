import React, { SVGProps } from 'react'

const SvgSentimentNeutral = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sentiment-neutral_svg__a"
        d="M6 9.333h4v1H6v-1zm4.333-2a1 1 0 110-2 1 1 0 010 2zm-4.666 0a1 1 0 110-2 1 1 0 010 2zm2.326-6A6.67 6.67 0 0114.667 8a6.67 6.67 0 01-6.674 6.667A6.663 6.663 0 011.333 8c0-3.68 2.98-6.667 6.66-6.667zm.007 12A5.332 5.332 0 0013.333 8 5.332 5.332 0 008 2.667 5.332 5.332 0 002.667 8 5.332 5.332 0 008 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sentiment-neutral_svg__b" fill="#fff">
        <use xlinkHref="#sentiment-neutral_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sentiment-neutral_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSentimentNeutral
