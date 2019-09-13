import React, { SVGProps } from 'react'

const SvgCasino = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="casino_svg__a"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM5 12c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1zm0-6c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1zm3 3c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1zm3 3c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1zm0-6c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="casino_svg__b" fill="#fff">
        <use xlinkHref="#casino_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#casino_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCasino
