import React, { SVGProps } from 'react'

const SvgCompareArrows = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="compare-arrows_svg__a"
        d="M6.007 9.333H1.333v1.334h4.674v2L8.667 10l-2.66-2.667v2zm3.986-.666v-2h4.674V5.333H9.993v-2L7.333 6l2.66 2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="compare-arrows_svg__b" fill="#fff">
        <use xlinkHref="#compare-arrows_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#compare-arrows_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCompareArrows
