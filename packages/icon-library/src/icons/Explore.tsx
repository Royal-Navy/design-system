import React, { SVGProps } from 'react'

const SvgExplore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="explore_svg__a"
        d="M8 7.267A.731.731 0 007.267 8c0 .407.326.733.733.733A.731.731 0 008.733 8 .731.731 0 008 7.267zm0-5.934A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zM9.46 9.46L4 12l2.54-5.46L12 4 9.46 9.46z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="explore_svg__b" fill="#fff">
        <use xlinkHref="#explore_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#explore_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExplore
