import React, { SVGProps } from 'react'

const SvgCrop169 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-16-9_svg__a"
        d="M12.667 4H3.333C2.6 4 2 4.6 2 5.333v5.334C2 11.4 2.6 12 3.333 12h9.334C13.4 12 14 11.4 14 10.667V5.333C14 4.6 13.4 4 12.667 4zm0 6.667H3.333V5.333h9.334v5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-16-9_svg__b" fill="#fff">
        <use xlinkHref="#crop-16-9_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-16-9_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCrop169
