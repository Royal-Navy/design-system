import React, { SVGProps } from 'react'

const SvgFilterDrama = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-drama_svg__a"
        d="M12.9 6.693A4.993 4.993 0 008 2.667 4.987 4.987 0 003.573 5.36 3.997 3.997 0 004 13.333h8.667A3.335 3.335 0 0016 10a3.317 3.317 0 00-3.1-3.307zM12.667 12H4a2.666 2.666 0 110-5.333 2.666 2.666 0 012.667 2.666H8c0-1.84-1.24-3.386-2.933-3.853A3.67 3.67 0 018 4a3.673 3.673 0 013.667 3.667V8h1c1.1 0 2 .9 2 2s-.9 2-2 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-drama_svg__b" fill="#fff">
        <use xlinkHref="#filter-drama_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-drama_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilterDrama
