import React, { SVGProps } from 'react'

const SvgNetworkCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="network-check_svg__a"
        d="M10.6 3.333a.325.325 0 00-.273.154l-.047.1-3.453 7.766a1.313 1.313 0 00-.174.64 1.337 1.337 0 002.647.28l.007-.02 1.626-8.586a.33.33 0 00-.333-.334zM.667 6L2 7.333A8.441 8.441 0 019.02 4.92l.793-1.787C6.593 2.56 3.16 3.513.667 6zM14 7.333L15.333 6a10.245 10.245 0 00-3.726-2.38l-.354 1.88c1 .413 1.934 1.02 2.747 1.833zM11.333 10l1.334-1.333a6.586 6.586 0 00-1.774-1.26l-.366 1.946c.28.18.553.394.806.647zm-8-1.333L4.667 10a4.733 4.733 0 012.686-1.333l.854-1.92a6.586 6.586 0 00-4.874 1.92z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="network-check_svg__b" fill="#fff">
        <use xlinkHref="#network-check_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#network-check_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNetworkCheck
