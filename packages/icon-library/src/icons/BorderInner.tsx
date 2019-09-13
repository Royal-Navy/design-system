import React, { SVGProps } from 'react'

const SvgBorderInner = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-inner_svg__a"
        d="M1.778 14.222h1.778v-1.778H1.778v1.778zm1.778-9.778H1.778v1.778h1.778V4.444zm.888 9.778h1.778v-1.778H4.444v1.778zm7.112-12.444H9.778v1.778h1.778V1.778zm-8 0H1.778v1.778h1.778V1.778zm2.666 0H4.444v1.778h1.778V1.778zm-4.444 9.778h1.778V9.778H1.778v1.778zm8 2.666h1.778v-1.778H9.778v1.778zm-.89-12.444H7.112V7.11H1.778V8.89H7.11v5.333H8.89V8.89h5.333V7.11H8.89V1.778zm3.556 0v1.778h1.778V1.778h-1.778zm0 4.444h1.778V4.444h-1.778v1.778zm0 8h1.778v-1.778h-1.778v1.778zm0-2.666h1.778V9.778h-1.778v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-inner_svg__b" fill="#fff">
        <use xlinkHref="#border-inner_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-inner_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderInner
