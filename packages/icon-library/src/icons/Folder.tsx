import React, { SVGProps } from 'react'

const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="folder_svg__a"
        d="M8.889 4.444L7.11 2.667H2.667c-.49 0-.89.4-.89.889v8.888c0 .49.4.89.89.89h10.666c.49 0 .89-.4.89-.89v-7.11c0-.49-.4-.89-.89-.89H8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="folder_svg__b" fill="#fff">
        <use xlinkHref="#folder_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#folder_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFolder
