import React, { SVGProps } from 'react'

const SvgDescription = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="description_svg__a"
        d="M9.333 1.333H4c-.733 0-1.327.6-1.327 1.334l-.006 10.666c0 .734.593 1.334 1.326 1.334H12c.733 0 1.333-.6 1.333-1.334v-8l-4-4zM10.667 12H5.333v-1.333h5.334V12zm0-2.667H5.333V8h5.334v1.333zM8.667 6V2.333L12.333 6H8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="description_svg__b" fill="#fff">
        <use xlinkHref="#description_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#description_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDescription
