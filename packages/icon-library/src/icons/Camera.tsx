import React, { SVGProps } from 'react'

const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="camera_svg__a"
        d="M6.267 7l3.18-5.507a6.656 6.656 0 00-5.66 1.34l2.44 4.234.04-.067zm8.093-1a6.683 6.683 0 00-4-4.227L7.92 6h6.44zm.173.667H9.54L9.733 7l3.174 5.5a6.607 6.607 0 001.76-4.5c0-.46-.047-.9-.134-1.333zM5.693 8l-2.6-4.5a6.638 6.638 0 00-1.626 5.833H6.46L5.693 8zM1.64 10a6.683 6.683 0 004 4.227L8.08 10H1.64zm7.513 0l-2.6 4.507a6.656 6.656 0 005.66-1.34l-2.44-4.234L9.153 10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="camera_svg__b" fill="#fff">
        <use xlinkHref="#camera_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#camera_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCamera
