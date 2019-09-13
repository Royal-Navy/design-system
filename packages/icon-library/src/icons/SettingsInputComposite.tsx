import React, { SVGProps } from 'react'

const SvgSettingsInputComposite = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-input-composite_svg__a"
        d="M3.333 1.333c0-.366-.3-.666-.666-.666-.367 0-.667.3-.667.666V4H.667v4h4V4H3.333V1.333zM6 10.667c0 .866.56 1.6 1.333 1.88v2.786h1.334v-2.786A1.994 1.994 0 0010 10.667V9.333H6v1.334zm-5.333 0c0 .866.56 1.6 1.333 1.88v2.786h1.333v-2.786a2.007 2.007 0 001.334-1.88V9.333h-4v1.334zM14 4V1.333c0-.366-.3-.666-.667-.666-.366 0-.666.3-.666.666V4h-1.334v4h4V4H14zM8.667 1.333c0-.366-.3-.666-.667-.666-.367 0-.667.3-.667.666V4H6v4h4V4H8.667V1.333zm2.666 9.334c0 .866.56 1.6 1.334 1.88v2.786H14v-2.786a1.994 1.994 0 001.333-1.88V9.333h-4v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-input-composite_svg__b" fill="#fff">
        <use xlinkHref="#settings-input-composite_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-input-composite_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsInputComposite
