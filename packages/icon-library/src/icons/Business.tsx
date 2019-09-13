import React, { SVGProps } from 'react'

const SvgBusiness = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="business_svg__a"
        d="M8 4.667V2H1.333v12h13.334V4.667H8zm-4 8H2.667v-1.334H4v1.334zM4 10H2.667V8.667H4V10zm0-2.667H2.667V6H4v1.333zm0-2.666H2.667V3.333H4v1.334zm2.667 8H5.333v-1.334h1.334v1.334zm0-2.667H5.333V8.667h1.334V10zm0-2.667H5.333V6h1.334v1.333zm0-2.666H5.333V3.333h1.334v1.334zm6.666 8H8v-1.334h1.333V10H8V8.667h1.333V7.333H8V6h5.333v6.667zM12 7.333h-1.333v1.334H12V7.333zM12 10h-1.333v1.333H12V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="business_svg__b" fill="#fff">
        <use xlinkHref="#business_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#business_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBusiness
