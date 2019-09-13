import React, { SVGProps } from 'react'

const SvgTransform = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="transform_svg__a"
        d="M14.667 12v-1.333H5.333v-8h1.334l-2-2-2 2H4V4H1.333v1.333H4v5.334C4 11.4 4.6 12 5.333 12h5.334v1.333H9.333l2 2 2-2H12V12h2.667zm-8-6.667h4v4H12v-4C12 4.6 11.4 4 10.667 4h-4v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="transform_svg__b" fill="#fff">
        <use xlinkHref="#transform_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#transform_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTransform
