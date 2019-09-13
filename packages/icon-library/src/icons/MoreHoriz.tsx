import React, { SVGProps } from 'react'

const SvgMoreHoriz = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="more-horiz_svg__a"
        d="M3.556 6.667c-.738 0-1.334.595-1.334 1.333s.596 1.333 1.334 1.333c.737 0 1.333-.595 1.333-1.333s-.596-1.333-1.333-1.333zm8.888 0c-.737 0-1.333.595-1.333 1.333s.596 1.333 1.333 1.333c.738 0 1.334-.595 1.334-1.333s-.596-1.333-1.334-1.333zM8 6.667c-.738 0-1.333.595-1.333 1.333S7.262 9.333 8 9.333 9.333 8.738 9.333 8 8.738 6.667 8 6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="more-horiz_svg__b" fill="#fff">
        <use xlinkHref="#more-horiz_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#more-horiz_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMoreHoriz
