import React, { SVGProps } from 'react'

const SvgBorderStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-style_svg__a"
        d="M9.778 14.222h1.778v-1.778H9.778v1.778zm2.666 0h1.778v-1.778h-1.778v1.778zm-8 0h1.778v-1.778H4.444v1.778zm2.667 0H8.89v-1.778H7.11v1.778zm5.333-2.666h1.778V9.778h-1.778v1.778zm0-2.667h1.778V7.11h-1.778V8.89zM1.778 1.778v12.444h1.778V3.556h10.666V1.778H1.778zm10.666 4.444h1.778V4.444h-1.778v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-style_svg__b" fill="#fff">
        <use xlinkHref="#border-style_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-style_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderStyle
