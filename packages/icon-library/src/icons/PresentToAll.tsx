import React, { SVGProps } from 'react'

const SvgPresentToAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="present-to-all_svg__a"
        d="M14 2H2C1.26 2 .667 2.593.667 3.333v9.334C.667 13.407 1.26 14 2 14h12c.74 0 1.333-.593 1.333-1.333V3.333C15.333 2.593 14.74 2 14 2zm0 10.68H2V3.32h12v9.36zM6.667 8H5.333L8 5.333 10.667 8H9.333v2.667H6.667V8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="present-to-all_svg__b" fill="#fff">
        <use xlinkHref="#present-to-all_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#present-to-all_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPresentToAll
