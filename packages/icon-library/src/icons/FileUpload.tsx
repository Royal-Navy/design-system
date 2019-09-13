import React, { SVGProps } from 'react'

const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="file-upload_svg__a"
        d="M6 10.667h4v-4h2.667L8 2 3.333 6.667H6v4zM3.333 12h9.334v1.333H3.333V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="file-upload_svg__b" fill="#fff">
        <use xlinkHref="#file-upload_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#file-upload_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFileUpload
