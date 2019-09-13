import React, { SVGProps } from 'react'

const SvgWbCloudy = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wb-cloudy_svg__a"
        d="M12.907 6.693A5.006 5.006 0 008 2.667 4.997 4.997 0 003.567 5.36 3.996 3.996 0 000 9.333c0 2.207 1.793 4 4 4h8.667A3.335 3.335 0 0016 10a3.316 3.316 0 00-3.093-3.307z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wb-cloudy_svg__b" fill="#fff">
        <use xlinkHref="#wb-cloudy_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wb-cloudy_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWbCloudy
