import React, { SVGProps } from 'react'

const SvgMoreVert = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="more-vert_svg__a"
        d="M8 4.889c.738 0 1.333-.596 1.333-1.333 0-.738-.595-1.334-1.333-1.334s-1.333.596-1.333 1.334c0 .737.595 1.333 1.333 1.333zm0 1.778c-.738 0-1.333.595-1.333 1.333S7.262 9.333 8 9.333 9.333 8.738 9.333 8 8.738 6.667 8 6.667zm0 4.444c-.738 0-1.333.596-1.333 1.333 0 .738.595 1.334 1.333 1.334s1.333-.596 1.333-1.334c0-.737-.595-1.333-1.333-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="more-vert_svg__b" fill="#fff">
        <use xlinkHref="#more-vert_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#more-vert_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMoreVert
