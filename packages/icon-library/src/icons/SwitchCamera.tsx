import React, { SVGProps } from 'react'

const SvgSwitchCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="switch-camera_svg__a"
        d="M13.333 2.667H11.22L10 1.333H6L4.78 2.667H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zM10 10.333V8.667H6v1.666L3.667 8 6 5.667v1.666h4V5.667L12.333 8 10 10.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="switch-camera_svg__b" fill="#fff">
        <use xlinkHref="#switch-camera_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#switch-camera_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSwitchCamera
