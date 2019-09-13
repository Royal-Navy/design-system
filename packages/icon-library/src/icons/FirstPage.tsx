import React, { SVGProps } from 'react'

const SvgFirstPage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="first-page_svg__a"
        d="M12.273 11.06L9.213 8l3.06-3.06-.94-.94-4 4 4 4 .94-.94zM4 4h1.333v8H4V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="first-page_svg__b" fill="#fff">
        <use xlinkHref="#first-page_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#first-page_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFirstPage
