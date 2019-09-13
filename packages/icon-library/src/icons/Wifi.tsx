import React, { SVGProps } from 'react'

const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wifi_svg__a"
        d="M.667 6L2 7.333a8.486 8.486 0 0112 0L15.333 6C11.287 1.953 4.72 1.953.667 6zM6 11.333l2 2 2-2a2.825 2.825 0 00-4 0zM3.333 8.667L4.667 10a4.716 4.716 0 016.666 0l1.334-1.333c-2.574-2.574-6.754-2.574-9.334 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wifi_svg__b" fill="#fff">
        <use xlinkHref="#wifi_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wifi_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWifi
