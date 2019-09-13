import React, { SVGProps } from 'react'

const SvgBorderVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-vertical_svg__a"
        d="M4.444 14.222h1.778v-1.778H4.444v1.778zm-2.666-8h1.778V4.444H1.778v1.778zm0-2.666h1.778V1.778H1.778v1.778zm2.666 5.333h1.778V7.11H4.444V8.89zm0-5.333h1.778V1.778H4.444v1.778zM1.778 14.222h1.778v-1.778H1.778v1.778zm0-5.333h1.778V7.11H1.778V8.89zm0 2.667h1.778V9.778H1.778v1.778zm10.666-9.778v1.778h1.778V1.778h-1.778zm0 7.11h1.778V7.112h-1.778V8.89zm-5.333 5.334H8.89V1.778H7.11v12.444zm5.333 0h1.778v-1.778h-1.778v1.778zm0-8h1.778V4.444h-1.778v1.778zm0 5.334h1.778V9.778h-1.778v1.778zm-2.666 2.666h1.778v-1.778H9.778v1.778zm0-5.333h1.778V7.11H9.778V8.89zm0-5.333h1.778V1.778H9.778v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-vertical_svg__b" fill="#fff">
        <use xlinkHref="#border-vertical_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-vertical_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderVertical
