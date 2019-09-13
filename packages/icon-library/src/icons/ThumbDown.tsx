import React, { SVGProps } from 'react'

const SvgThumbDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="thumb-down_svg__a"
        d="M10 2H4c-.553 0-1.027.333-1.227.813L.76 7.513C.7 7.667.667 7.827.667 8v1.273l.006.007-.006.053c0 .734.6 1.334 1.333 1.334h4.207l-.634 3.046-.02.214c0 .273.114.526.294.706l.706.7 4.394-4.393c.24-.24.386-.573.386-.94V3.333C11.333 2.6 10.733 2 10 2zm2.667 0v8h2.666V2h-2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="thumb-down_svg__b" fill="#fff">
        <use xlinkHref="#thumb-down_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#thumb-down_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgThumbDown
