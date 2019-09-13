import React, { SVGProps } from 'react'

const SvgContentCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="content-copy_svg__a"
        d="M10.667.667h-8c-.734 0-1.334.6-1.334 1.333v9.333h1.334V2h8V.667zm2 2.666H5.333C4.6 3.333 4 3.933 4 4.667V14c0 .733.6 1.333 1.333 1.333h7.334c.733 0 1.333-.6 1.333-1.333V4.667c0-.734-.6-1.334-1.333-1.334zm0 10.667H5.333V4.667h7.334V14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="content-copy_svg__b" fill="#fff">
        <use xlinkHref="#content-copy_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#content-copy_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgContentCopy
