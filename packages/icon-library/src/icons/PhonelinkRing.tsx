import React, { SVGProps } from 'react'

const SvgPhonelinkRing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phonelink-ring_svg__a"
        d="M13.4 5.133l-.667.667c1.2 1.2 1.2 3.067 0 4.333l.667.667c1.667-1.533 1.667-4.067 0-5.667zm-1.4 1.4l-.667.667a1.3 1.3 0 010 1.533L12 9.4c.8-.8.8-2 0-2.867zM9.333.667H2.667c-.734 0-1.334.6-1.334 1.333v12c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333V2c0-.733-.6-1.333-1.334-1.333zm0 12.666H2.667V2.667h6.666v10.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phonelink-ring_svg__b" fill="#fff">
        <use xlinkHref="#phonelink-ring_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phonelink-ring_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhonelinkRing
