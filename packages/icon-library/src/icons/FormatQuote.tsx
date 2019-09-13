import React, { SVGProps } from 'react'

const SvgFormatQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-quote_svg__a"
        d="M8.889 4.444V8.89h2.444l-1.555 2.667h2l1.555-2.667V4.444H8.89zM2.667 8.89H5.11l-1.555 2.667h2L7.11 8.889V4.444H2.667V8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-quote_svg__b" fill="#fff">
        <use xlinkHref="#format-quote_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-quote_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatQuote
