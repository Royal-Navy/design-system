import React, { SVGProps } from 'react'

const SvgLocalShipping = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-shipping_svg__a"
        d="M13.333 5.333h-2V2.667H2c-.733 0-1.333.6-1.333 1.333v7.333H2c0 1.107.893 2 2 2s2-.893 2-2h4c0 1.107.893 2 2 2s2-.893 2-2h1.333V8l-2-2.667zm-9.333 7c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1zm9-6L14.307 8h-2.974V6.333H13zm-1 6c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-shipping_svg__b" fill="#fff">
        <use xlinkHref="#local-shipping_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-shipping_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalShipping
