import React, { SVGProps } from 'react'

const SvgViewComfy = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-comfy_svg__a"
        d="M2 6h2.667V3.333H2V6zm0 3.333h2.667V6.667H2v2.666zm3.333 0H8V6.667H5.333v2.666zm3.334 0h2.666V6.667H8.667v2.666zM5.333 6H8V3.333H5.333V6zm3.334-2.667V6h2.666V3.333H8.667zm3.333 6h2.667V6.667H12v2.666zM2 12.667h2.667V10H2v2.667zm3.333 0H8V10H5.333v2.667zm3.334 0h2.666V10H8.667v2.667zm3.333 0h2.667V10H12v2.667zm0-9.334V6h2.667V3.333H12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-comfy_svg__b" fill="#fff">
        <use xlinkHref="#view-comfy_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-comfy_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewComfy
