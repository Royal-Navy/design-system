import React, { SVGProps } from 'react'

const SvgFace = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="face_svg__a"
        d="M6 7.833a.834.834 0 100 1.668.834.834 0 000-1.668zm4 0a.834.834 0 100 1.668.834.834 0 000-1.668zm-2-6.5A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm0 12A5.34 5.34 0 012.667 8c0-.193.013-.387.033-.573a6.708 6.708 0 003.473-3.58 6.65 6.65 0 006.94 2.646c.14.474.22.98.22 1.507A5.34 5.34 0 018 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="face_svg__b" fill="#fff">
        <use xlinkHref="#face_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#face_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFace
