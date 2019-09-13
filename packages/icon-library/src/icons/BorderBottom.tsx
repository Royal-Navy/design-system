import React, { SVGProps } from 'react'

const SvgBorderBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-bottom_svg__a"
        d="M6.222 1.778H4.444v1.778h1.778V1.778zM8.89 7.11H7.11V8.89H8.89V7.11zm0 2.667H7.11v1.778H8.89V9.778zm2.667-2.667H9.778V8.89h1.778V7.11zm-5.334 0H4.444V8.89h1.778V7.11zm5.334-5.333H9.778v1.778h1.778V1.778zM8.889 4.444H7.11v1.778H8.89V4.444zm0-2.666H7.11v1.778H8.89V1.778zm-5.333 8H1.778v1.778h1.778V9.778zm8.888 1.778h1.778V9.778h-1.778v1.778zm0-5.334h1.778V4.444h-1.778v1.778zm0 2.667h1.778V7.11h-1.778V8.89zm0-7.111v1.778h1.778V1.778h-1.778zm-8.888 0H1.778v1.778h1.778V1.778zM1.778 14.222h12.444v-1.778H1.778v1.778zm1.778-9.778H1.778v1.778h1.778V4.444zm0 2.667H1.778V8.89h1.778V7.11z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-bottom_svg__b" fill="#fff">
        <use xlinkHref="#border-bottom_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-bottom_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderBottom
