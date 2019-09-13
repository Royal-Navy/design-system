import React, { SVGProps } from 'react'

const SvgMore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="more_svg__a"
        d="M14.667 2h-10c-.46 0-.82.233-1.06.587L0 8l3.607 5.407c.24.353.646.593 1.106.593h9.954C15.4 14 16 13.4 16 12.667V3.333C16 2.6 15.4 2 14.667 2zM6 9c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1zm3.333 0c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .553-.446 1-1 1zm3.334 0c-.554 0-1-.447-1-1 0-.553.446-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="more_svg__b" fill="#fff">
        <use xlinkHref="#more_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#more_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMore
