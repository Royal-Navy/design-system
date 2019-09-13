import React, { SVGProps } from 'react'

const SvgStayPrimaryPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="stay-primary-portrait_svg__a"
        d="M11.333.673L4.667.667c-.734 0-1.327.6-1.327 1.333v12c0 .733.593 1.333 1.327 1.333h6.666c.734 0 1.334-.6 1.334-1.333V2c0-.733-.6-1.327-1.334-1.327zm0 11.994H4.667V3.333h6.666v9.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="stay-primary-portrait_svg__b" fill="#fff">
        <use xlinkHref="#stay-primary-portrait_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#stay-primary-portrait_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStayPrimaryPortrait
