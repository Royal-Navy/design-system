import React, { SVGProps } from 'react'

const SvgWbAuto = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wb-auto_svg__a"
        d="M4.567 8.433H6.1L5.333 6l-.766 2.433zm10.1-3.766l-.8 4.193-1-4.193H11.8l-.993 4.193L10 4.667h-.507A5.332 5.332 0 000 8a5.332 5.332 0 005.333 5.333A5.332 5.332 0 0010.1 10.38l.067.287h1.166l1-4.067 1 4.067H14.5l1.367-6h-1.2zm-7.8 6L6.4 9.333H4.267L3.8 10.667H2.533l2.134-6H6l2.133 6H6.867z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wb-auto_svg__b" fill="#fff">
        <use xlinkHref="#wb-auto_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wb-auto_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWbAuto
