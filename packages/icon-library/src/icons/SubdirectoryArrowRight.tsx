import React, { SVGProps } from 'react'

const SvgSubdirectoryArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="subdirectory-arrow-right_svg__a"
        d="M12.667 10l-4 4-.947-.947 2.393-2.386H2.667v-8H4v6.666h6.113L7.72 6.947 8.667 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="subdirectory-arrow-right_svg__b" fill="#fff">
        <use xlinkHref="#subdirectory-arrow-right_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#subdirectory-arrow-right_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSubdirectoryArrowRight
