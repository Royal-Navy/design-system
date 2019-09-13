import React, { SVGProps } from 'react'

const SvgCropSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-square_svg__a"
        d="M12 2.667H4c-.733 0-1.333.6-1.333 1.333v8c0 .733.6 1.333 1.333 1.333h8c.733 0 1.333-.6 1.333-1.333V4c0-.733-.6-1.333-1.333-1.333zM12 12H4V4h8v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-square_svg__b" fill="#fff">
        <use xlinkHref="#crop-square_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-square_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCropSquare
