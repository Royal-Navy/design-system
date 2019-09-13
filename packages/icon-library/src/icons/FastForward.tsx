import React, { SVGProps } from 'react'

const SvgFastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fast-forward_svg__a"
        d="M2.667 12l5.666-4-5.666-4v8zm6-8v8l5.666-4-5.666-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fast-forward_svg__b" fill="#fff">
        <use xlinkHref="#fast-forward_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fast-forward_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFastForward
