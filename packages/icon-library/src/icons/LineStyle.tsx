import React, { SVGProps } from 'react'

const SvgLineStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="line-style_svg__a"
        d="M2 10.667h3.333V9.333H2v1.334zm4.333 0h3.334V9.333H6.333v1.334zm4.334 0H14V9.333h-3.333v1.334zM2 13.333h1.333V12H2v1.333zm2.667 0H6V12H4.667v1.333zm2.666 0h1.334V12H7.333v1.333zm2.667 0h1.333V12H10v1.333zm2.667 0H14V12h-1.333v1.333zM2 8h5.333V6.667H2V8zm6.667 0H14V6.667H8.667V8zM2 2.667v2.666h12V2.667H2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="line-style_svg__b" fill="#fff">
        <use xlinkHref="#line-style_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#line-style_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLineStyle
