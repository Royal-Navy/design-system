import React, { SVGProps } from 'react'

const SvgTraffic = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="traffic_svg__a"
        d="M13.333 6.667h-2v-.76c1.147-.3 2-1.334 2-2.574h-2v-.666c0-.367-.3-.667-.666-.667H5.333c-.366 0-.666.3-.666.667v.666h-2c0 1.24.853 2.274 2 2.574v.76h-2c0 1.24.853 2.273 2 2.573V10h-2c0 1.24.853 2.273 2 2.573v.76c0 .367.3.667.666.667h5.334c.366 0 .666-.3.666-.667v-.76c1.147-.3 2-1.333 2-2.573h-2v-.76c1.147-.3 2-1.333 2-2.573zm-5.333 6A1.333 1.333 0 118 10a1.333 1.333 0 010 2.666zm0-3.334a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zM8 6a1.333 1.333 0 110-2.666A1.333 1.333 0 018 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="traffic_svg__b" fill="#fff">
        <use xlinkHref="#traffic_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#traffic_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTraffic
