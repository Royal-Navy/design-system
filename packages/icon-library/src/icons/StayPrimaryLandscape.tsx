import React, { SVGProps } from 'react'

const SvgStayPrimaryLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="stay-primary-landscape_svg__a"
        d="M.673 4.667l-.006 6.666c0 .734.6 1.334 1.333 1.334h12c.733 0 1.333-.6 1.333-1.334V4.667c0-.734-.6-1.334-1.333-1.334H2c-.733 0-1.327.6-1.327 1.334zm11.994 0v6.666H3.333V4.667h9.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="stay-primary-landscape_svg__b" fill="#fff">
        <use xlinkHref="#stay-primary-landscape_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#stay-primary-landscape_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStayPrimaryLandscape
