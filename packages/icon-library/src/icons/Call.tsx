import React, { SVGProps } from 'react'

const SvgCall = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call_svg__a"
        d="M4.413 7.193a10.1 10.1 0 004.394 4.394l1.466-1.467c.18-.18.447-.24.68-.16.747.247 1.554.38 2.38.38.367 0 .667.3.667.667v2.326c0 .367-.3.667-.667.667C7.073 14 2 8.927 2 2.667 2 2.3 2.3 2 2.667 2H5c.367 0 .667.3.667.667 0 .833.133 1.633.38 2.38a.669.669 0 01-.167.68L4.413 7.193z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call_svg__b" fill="#fff">
        <use xlinkHref="#call_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCall
