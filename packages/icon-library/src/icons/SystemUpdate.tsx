import React, { SVGProps } from 'react'

const SvgSystemUpdate = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="system-update_svg__a"
        d="M11.333.673L4.667.667c-.734 0-1.334.6-1.334 1.333v12c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333V2c0-.733-.6-1.327-1.334-1.327zm0 11.994H4.667V3.333h6.666v9.334zm-.666-4h-2V5.333H7.333v3.334h-2L8 11.333l2.667-2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="system-update_svg__b" fill="#fff">
        <use xlinkHref="#system-update_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#system-update_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSystemUpdate
