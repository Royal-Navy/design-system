import React, { SVGProps } from 'react'

const SvgFormatPaint = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-paint_svg__a"
        d="M11.556 2.667c0-.49-.4-.89-.89-.89h-7.11c-.49 0-.89.4-.89.89v2.666c0 .49.4.89.89.89h7.11c.49 0 .89-.4.89-.89v-.889h1.333v2.667H6.222v7.111H8V8.444h6.222V3.556h-2.666v-.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-paint_svg__b" fill="#fff">
        <use xlinkHref="#format-paint_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-paint_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatPaint
