import React, { SVGProps } from 'react'

const SvgControlPoint = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="control-point_svg__a"
        d="M8.667 4.667H7.333v2.666H4.667v1.334h2.666v2.666h1.334V8.667h2.666V7.333H8.667V4.667zM8 1.333C4.327 1.333 1.333 4.327 1.333 8c0 3.673 2.994 6.667 6.667 6.667 3.673 0 6.667-2.994 6.667-6.667 0-3.673-2.994-6.667-6.667-6.667zm0 12A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="control-point_svg__b" fill="#fff">
        <use xlinkHref="#control-point_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#control-point_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgControlPoint
