import React, { SVGProps } from 'react'

const SvgFiberPin = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fiber-pin_svg__a"
        d="M3.667 7H5v.667H3.667V7zm9.666-4.333H2.667c-.74 0-1.327.593-1.327 1.333l-.007 8c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V4c0-.74-.594-1.333-1.334-1.333zM6 7.667c0 .566-.433 1-1 1H3.667V10h-1V6H5c.567 0 1 .433 1 1v.667zM8.333 10h-1V6h1v4zm5 0h-.8l-1.7-2.333V10H10V6h.833L12.5 8.333V6h.833v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fiber-pin_svg__b" fill="#fff">
        <use xlinkHref="#fiber-pin_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fiber-pin_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFiberPin
