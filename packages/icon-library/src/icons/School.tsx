import React, { SVGProps } from 'react'

const SvgSchool = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="school_svg__a"
        d="M3.333 8.787v2.666L8 14l4.667-2.547V8.787L8 11.333 3.333 8.787zM8 2L.667 6 8 10l6-3.273v4.606h1.333V6L8 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="school_svg__b" fill="#fff">
        <use xlinkHref="#school_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#school_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSchool
