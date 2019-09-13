import React, { SVGProps } from 'react'

const SvgInsertDriveFile = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="insert-drive-file_svg__a"
        d="M3.556.889c-.49 0-.88.4-.88.889l-.01 12.444c0 .49.392.89.89.89h8.888c.49 0 .89-.4.89-.89V5.333L8.888.89H3.556zm5.333 4.444V1.778l3.555 3.555H8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="insert-drive-file_svg__b" fill="#fff">
        <use xlinkHref="#insert-drive-file_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#insert-drive-file_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInsertDriveFile
