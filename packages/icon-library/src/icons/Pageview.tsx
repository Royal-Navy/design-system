import React, { SVGProps } from 'react'

const SvgPageview = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pageview_svg__a"
        d="M7.667 6a1.667 1.667 0 100 3.335 1.667 1.667 0 000-3.335zm5.666-3.333H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zm-2.14 9.473l-1.94-1.94a2.956 2.956 0 01-1.593.467 2.995 2.995 0 01-2.993-3c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .586-.174 1.126-.467 1.593l1.94 1.933-.947.947z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pageview_svg__b" fill="#fff">
        <use xlinkHref="#pageview_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pageview_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPageview
