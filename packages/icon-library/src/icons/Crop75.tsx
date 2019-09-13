import React, { SVGProps } from 'react'

const SvgCrop75 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-7-5_svg__a"
        d="M12.667 4.667H3.333C2.6 4.667 2 5.267 2 6v4c0 .733.6 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333V6c0-.733-.6-1.333-1.333-1.333zm0 5.333H3.333V6h9.334v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-7-5_svg__b" fill="#fff">
        <use xlinkHref="#crop-7-5_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-7-5_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCrop75
