import React, { SVGProps } from 'react'

const SvgHttp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="http_svg__a"
        d="M3 7.333H1.667V6h-1v4h1V8.333H3V10h1V6H3v1.333zM4.667 7h1v3h1V7h1V6h-3v1zm3.666 0h1v3h1V7h1V6h-3v1zm6-1H12v4h1V8.667h1.333c.534 0 1-.467 1-1V7c0-.533-.466-1-1-1zm0 1.667H13V7h1.333v.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="http_svg__b" fill="#fff">
        <use xlinkHref="#http_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#http_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHttp
