import React, { SVGProps } from 'react'

const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="comment_svg__a"
        d="M14.66 2.667c0-.734-.593-1.334-1.327-1.334H2.667c-.734 0-1.334.6-1.334 1.334v8c0 .733.6 1.333 1.334 1.333H12l2.667 2.667-.007-12zM12 9.333H4V8h8v1.333zm0-2H4V6h8v1.333zm0-2H4V4h8v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="comment_svg__b" fill="#fff">
        <use xlinkHref="#comment_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#comment_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgComment
