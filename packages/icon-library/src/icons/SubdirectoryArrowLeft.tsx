import React, { SVGProps } from 'react'

const SvgSubdirectoryArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="subdirectory-arrow-left_svg__a"
        d="M7.333 6l.947.947-2.393 2.386H12V2.667h1.333v8H5.887l2.393 2.386-.947.947-4-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="subdirectory-arrow-left_svg__b" fill="#fff">
        <use xlinkHref="#subdirectory-arrow-left_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#subdirectory-arrow-left_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSubdirectoryArrowLeft
