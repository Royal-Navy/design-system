import React, { SVGProps } from 'react'

const SvgPinDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pin-drop_svg__a"
        d="M12 5.333c0-2.206-1.793-4-4-4s-4 1.794-4 4c0 3 4 7.334 4 7.334s4-4.334 4-7.334zm-5.333 0C6.667 4.6 7.267 4 8 4s1.333.6 1.333 1.333a1.333 1.333 0 11-2.666 0zm-3.334 8v1.334h9.334v-1.334H3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pin-drop_svg__b" fill="#fff">
        <use xlinkHref="#pin-drop_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pin-drop_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPinDrop
