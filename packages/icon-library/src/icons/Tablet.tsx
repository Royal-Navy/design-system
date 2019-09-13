import React, { SVGProps } from 'react'

const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tablet_svg__a"
        d="M14 2.667H2c-.733 0-1.333.6-1.333 1.333v8c0 .733.6 1.333 1.333 1.333h12c.733 0 1.327-.6 1.327-1.333l.006-8c0-.733-.6-1.333-1.333-1.333zM12.667 12H3.333V4h9.334v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tablet_svg__b" fill="#fff">
        <use xlinkHref="#tablet_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tablet_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTablet
