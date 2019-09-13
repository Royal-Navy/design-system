import React, { SVGProps } from 'react'

const SvgCropPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-portrait_svg__a"
        d="M11.333 2H4.667c-.734 0-1.334.6-1.334 1.333v9.334c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333V3.333c0-.733-.6-1.333-1.334-1.333zm0 10.667H4.667V3.333h6.666v9.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-portrait_svg__b" fill="#fff">
        <use xlinkHref="#crop-portrait_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-portrait_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCropPortrait
