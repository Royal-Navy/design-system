import React, { SVGProps } from 'react'

const SvgSentimentDissatisfied = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sentiment-dissatisfied_svg__a"
        d="M10.333 7.333a1 1 0 110-2 1 1 0 010 2zm-4.666 0a1 1 0 110-2 1 1 0 010 2zm2.326-6A6.67 6.67 0 0114.667 8a6.67 6.67 0 01-6.674 6.667A6.663 6.663 0 011.333 8c0-3.68 2.98-6.667 6.66-6.667zm.007 12A5.332 5.332 0 0013.333 8 5.332 5.332 0 008 2.667 5.332 5.332 0 002.667 8 5.332 5.332 0 008 13.333zm0-4c1.553 0 2.88.967 3.413 2.334H10.3A2.665 2.665 0 008 10.333c-.987 0-1.84.54-2.3 1.334H4.587A3.663 3.663 0 018 9.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sentiment-dissatisfied_svg__b" fill="#fff">
        <use xlinkHref="#sentiment-dissatisfied_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sentiment-dissatisfied_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSentimentDissatisfied
