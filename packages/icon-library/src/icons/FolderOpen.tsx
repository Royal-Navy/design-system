import React, { SVGProps } from 'react'

const SvgFolderOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="folder-open_svg__a"
        d="M13.333 4.444H8.89L7.11 2.667H2.667c-.49 0-.89.4-.89.889v8.888c0 .49.4.89.89.89h10.666c.49 0 .89-.4.89-.89v-7.11c0-.49-.4-.89-.89-.89zm-.889 7.112H3.556V6.222h8.888v5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="folder-open_svg__b" fill="#fff">
        <use xlinkHref="#folder-open_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#folder-open_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFolderOpen
