import React, { SVGProps } from 'react'

const SvgFiberNew = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fiber-new_svg__a"
        d="M13.333 2.667H2.667c-.74 0-1.327.593-1.327 1.333l-.007 8c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V4c0-.74-.594-1.333-1.334-1.333zM5.667 10h-.8l-1.7-2.333V10h-.834V6h.834l1.666 2.333V6h.834v4zM9 6.84H7.333v.747H9v.84H7.333v.74H9V10H6.333V6H9v.84zm4.667 2.493c0 .367-.3.667-.667.667h-2.667a.669.669 0 01-.666-.667V6h.833v3.007h.753V6.66h.834V9h.746V6h.834v3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fiber-new_svg__b" fill="#fff">
        <use xlinkHref="#fiber-new_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fiber-new_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFiberNew
