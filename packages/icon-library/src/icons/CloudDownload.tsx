import React, { SVGProps } from 'react'

const SvgCloudDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cloud-download_svg__a"
        d="M12.9 6.693A4.993 4.993 0 003.567 5.36 3.996 3.996 0 000 9.333c0 2.207 1.793 4 4 4h8.667A3.335 3.335 0 0016 10a3.317 3.317 0 00-3.1-3.307zm-1.567 1.974L8 12 4.667 8.667h2V6h2.666v2.667h2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cloud-download_svg__b" fill="#fff">
        <use xlinkHref="#cloud-download_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cloud-download_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCloudDownload
