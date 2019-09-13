import React, { SVGProps } from 'react'

const SvgBorderHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-horizontal_svg__a"
        d="M7.111 14.222H8.89v-1.778H7.11v1.778zM4.444 3.556h1.778V1.778H4.444v1.778zm2.667 8H8.89V9.778H7.11v1.778zm-2.667 2.666h1.778v-1.778H4.444v1.778zm-2.666-8h1.778V4.444H1.778v1.778zm0 8h1.778v-1.778H1.778v1.778zm0-10.666h1.778V1.778H1.778v1.778zm0 5.333h12.444V7.11H1.778V8.89zm0 2.667h1.778V9.778H1.778v1.778zm10.666 0h1.778V9.778h-1.778v1.778zm0 2.666h1.778v-1.778h-1.778v1.778zm0-8h1.778V4.444h-1.778v1.778zm0-4.444v1.778h1.778V1.778h-1.778zM7.111 3.556H8.89V1.778H7.11v1.778zm2.667 0h1.778V1.778H9.778v1.778zM7.11 6.222H8.89V4.444H7.11v1.778zm2.667 8h1.778v-1.778H9.778v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-horizontal_svg__b" fill="#fff">
        <use xlinkHref="#border-horizontal_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-horizontal_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderHorizontal
