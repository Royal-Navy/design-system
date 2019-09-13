import React, { SVGProps } from 'react'

const SvgBorderTop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-top_svg__a"
        d="M4.444 8.889h1.778V7.11H4.444V8.89zm-2.666 5.333h1.778v-1.778H1.778v1.778zm5.333 0H8.89v-1.778H7.11v1.778zm0-2.666H8.89V9.778H7.11v1.778zm-2.667 2.666h1.778v-1.778H4.444v1.778zm-2.666-2.666h1.778V9.778H1.778v1.778zM7.11 8.889H8.89V7.11H7.11V8.89zM1.778 6.222h1.778V4.444H1.778v1.778zm0 2.667h1.778V7.11H1.778V8.89zm10.666 0h1.778V7.11h-1.778V8.89zm0 2.667h1.778V9.778h-1.778v1.778zm0-5.334h1.778V4.444h-1.778v1.778zM1.778 1.778v1.778h12.444V1.778H1.778zM7.11 6.222H8.89V4.444H7.11v1.778zm2.667 8h1.778v-1.778H9.778v1.778zm0-5.333h1.778V7.11H9.778V8.89zm2.666 5.333h1.778v-1.778h-1.778v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-top_svg__b" fill="#fff">
        <use xlinkHref="#border-top_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-top_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderTop
