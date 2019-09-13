import React, { SVGProps } from 'react'

const SvgCropOriginal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-original_svg__a"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm0 10.667H3.333V3.333h9.334v9.334zm-3.36-4.474l-1.834 2.36L6.167 8.98l-1.834 2.353h7.334l-2.36-3.14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-original_svg__b" fill="#fff">
        <use xlinkHref="#crop-original_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-original_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCropOriginal
