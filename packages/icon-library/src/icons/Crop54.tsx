import React, { SVGProps } from 'react'

const SvgCrop54 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-5-4_svg__a"
        d="M12.667 3.333H3.333C2.6 3.333 2 3.933 2 4.667v6.666c0 .734.6 1.334 1.333 1.334h9.334c.733 0 1.333-.6 1.333-1.334V4.667c0-.734-.6-1.334-1.333-1.334zm0 8H3.333V4.667h9.334v6.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-5-4_svg__b" fill="#fff">
        <use xlinkHref="#crop-5-4_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-5-4_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCrop54
