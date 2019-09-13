import React, { SVGProps } from 'react'

const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="scanner_svg__a"
        d="M13.2 7.133l-10.4-3.8L2.333 4.6l9.4 3.4h-8.4C2.6 8 2 8.6 2 9.333V12c0 .733.6 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333V8.333c0-.533-.333-1.066-.8-1.2zm-8.533 4.2H3.333V10h1.334v1.333zm8 0H6V10h6.667v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="scanner_svg__b" fill="#fff">
        <use xlinkHref="#scanner_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#scanner_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgScanner
