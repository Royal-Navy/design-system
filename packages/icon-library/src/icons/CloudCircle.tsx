import React, { SVGProps } from 'react'

const SvgCloudCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cloud-circle_svg__a"
        d="M8 .889A7.11 7.11 0 00.889 8 7.11 7.11 0 008 15.111 7.11 7.11 0 0015.111 8 7.11 7.11 0 008 .889zm3.111 9.778H5.333a2.223 2.223 0 010-4.445h.16C5.867 5.192 6.844 4.444 8 4.444a2.663 2.663 0 012.667 2.667h.444c.978 0 1.778.8 1.778 1.778s-.8 1.778-1.778 1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cloud-circle_svg__b" fill="#fff">
        <use xlinkHref="#cloud-circle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cloud-circle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCloudCircle
