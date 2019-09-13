import React, { SVGProps } from 'react'

const SvgCrop32 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-3-2_svg__a"
        d="M12.667 2.667H3.333C2.6 2.667 2 3.267 2 4v8c0 .733.6 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333V4c0-.733-.6-1.333-1.333-1.333zm0 9.333H3.333V4h9.334v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-3-2_svg__b" fill="#fff">
        <use xlinkHref="#crop-3-2_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-3-2_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCrop32
