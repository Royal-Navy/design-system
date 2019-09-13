import React, { SVGProps } from 'react'

const SvgCloudDone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cloud-done_svg__a"
        d="M12.9 6.693A4.993 4.993 0 003.567 5.36 3.996 3.996 0 000 9.333c0 2.207 1.793 4 4 4h8.667A3.335 3.335 0 0016 10a3.317 3.317 0 00-3.1-3.307zm-6.233 4.64L4.333 9l.94-.94 1.394 1.387L10.12 6l.94.94-4.393 4.393z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cloud-done_svg__b" fill="#fff">
        <use xlinkHref="#cloud-done_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cloud-done_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCloudDone
