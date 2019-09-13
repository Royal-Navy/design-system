import React, { SVGProps } from 'react'

const SvgCloudQueue = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cloud-queue_svg__a"
        d="M12.9 6.693A4.993 4.993 0 003.567 5.36 3.996 3.996 0 000 9.333c0 2.207 1.793 4 4 4h8.667A3.335 3.335 0 0016 10a3.317 3.317 0 00-3.1-3.307zM12.667 12H4a2.666 2.666 0 110-5.333h.473a3.668 3.668 0 017.194 1V8h1c1.106 0 2 .893 2 2s-.894 2-2 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cloud-queue_svg__b" fill="#fff">
        <use xlinkHref="#cloud-queue_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cloud-queue_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCloudQueue
