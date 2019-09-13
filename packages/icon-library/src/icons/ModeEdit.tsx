import React, { SVGProps } from 'react'

const SvgModeEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="mode-edit_svg__a"
        d="M1.778 11.449v2.773H4.55l7.893-7.893-2.773-2.773-7.893 7.893zm13.12-7.565a.735.735 0 000-1.048l-1.734-1.734a.735.735 0 00-1.048 0l-1.45 1.458 2.774 2.773 1.458-1.449z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mode-edit_svg__b" fill="#fff">
        <use xlinkHref="#mode-edit_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#mode-edit_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgModeEdit
