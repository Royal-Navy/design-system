import React, { SVGProps } from 'react'

const SvgDns = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="dns_svg__a"
        d="M13.333 8.667H2.667c-.367 0-.667.3-.667.666v4c0 .367.3.667.667.667h10.666c.367 0 .667-.3.667-.667v-4c0-.366-.3-.666-.667-.666zm-8.666 4c-.734 0-1.334-.6-1.334-1.334 0-.733.6-1.333 1.334-1.333C5.4 10 6 10.6 6 11.333c0 .734-.6 1.334-1.333 1.334zM13.333 2H2.667C2.3 2 2 2.3 2 2.667v4c0 .366.3.666.667.666h10.666c.367 0 .667-.3.667-.666v-4C14 2.3 13.7 2 13.333 2zM4.667 6c-.734 0-1.334-.6-1.334-1.333 0-.734.6-1.334 1.334-1.334.733 0 1.333.6 1.333 1.334C6 5.4 5.4 6 4.667 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dns_svg__b" fill="#fff">
        <use xlinkHref="#dns_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#dns_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDns
