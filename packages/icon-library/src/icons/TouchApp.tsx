import React, { SVGProps } from 'react'

const SvgTouchApp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="touch-app_svg__a"
        d="M6 7.493V5a1.667 1.667 0 013.333 0v2.493A2.99 2.99 0 0010.667 5c0-1.66-1.34-3-3-3s-3 1.34-3 3A2.99 2.99 0 006 7.493zm6.56 3.087L9.533 9.073A.939.939 0 009.173 9h-.506V5c0-.553-.447-1-1-1-.554 0-1 .447-1 1v7.16l-2.287-.48c-.053-.007-.1-.02-.16-.02a.746.746 0 00-.527.22l-.526.533 3.293 3.294c.18.18.433.293.707.293h4.526c.5 0 .887-.367.96-.853l.5-3.514c.007-.046.014-.093.014-.133a.999.999 0 00-.607-.92z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="touch-app_svg__b" fill="#fff">
        <use xlinkHref="#touch-app_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#touch-app_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTouchApp
