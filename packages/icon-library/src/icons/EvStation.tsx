import React, { SVGProps } from 'react'

const SvgEvStation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="ev-station_svg__a"
        d="M13.18 4.82l.007-.007-2.48-2.48L10 3.04l1.407 1.407c-.627.24-1.074.84-1.074 1.553a1.667 1.667 0 002.334 1.527v4.806c0 .367-.3.667-.667.667a.669.669 0 01-.667-.667v-3C11.333 8.6 10.733 8 10 8h-.667V3.333C9.333 2.6 8.733 2 8 2H4c-.733 0-1.333.6-1.333 1.333V14h6.666V9h1v3.333a1.667 1.667 0 003.334 0V6c0-.46-.187-.88-.487-1.18zM12 6.667A.669.669 0 0111.333 6c0-.367.3-.667.667-.667.367 0 .667.3.667.667 0 .367-.3.667-.667.667zM5.333 12V9H4l2.667-5v3.333H8L5.333 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="ev-station_svg__b" fill="#fff">
        <use xlinkHref="#ev-station_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#ev-station_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEvStation
