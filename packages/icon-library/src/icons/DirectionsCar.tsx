import React, { SVGProps } from 'react'

const SvgDirectionsCar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="directions-car_svg__a"
        d="M12.613 4.007a.996.996 0 00-.946-.674H4.333c-.44 0-.806.28-.946.674L2 8v5.333c0 .367.3.667.667.667h.666C3.7 14 4 13.7 4 13.333v-.666h8v.666c0 .367.3.667.667.667h.666c.367 0 .667-.3.667-.667V8l-1.387-3.993zm-8.28 6.66c-.553 0-1-.447-1-1 0-.554.447-1 1-1 .554 0 1 .446 1 1 0 .553-.446 1-1 1zm7.334 0c-.554 0-1-.447-1-1 0-.554.446-1 1-1 .553 0 1 .446 1 1 0 .553-.447 1-1 1zM3.333 7.333l1-3h7.334l1 3H3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="directions-car_svg__b" fill="#fff">
        <use xlinkHref="#directions-car_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#directions-car_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDirectionsCar
