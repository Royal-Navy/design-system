import React, { SVGProps } from 'react'

const SvgGif = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="gif_svg__a"
        d="M7.667 6h1v4h-1V6zM6 6H4c-.4 0-.667.333-.667.667v2.666c0 .334.267.667.667.667h2c.4 0 .667-.333.667-.667V8h-1v1H4.333V7h2.334v-.333A.668.668 0 006 6zm6.667 1V6h-3v4h1V8.667H12v-1h-1.333V7h2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="gif_svg__b" fill="#fff">
        <use xlinkHref="#gif_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#gif_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGif
