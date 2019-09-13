import React, { SVGProps } from 'react'

const SvgMotorcycle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="motorcycle_svg__a"
        d="M12.96 6.02l-2.687-2.687h-2.94v1.334h2.394L11.06 6H3.333A3.301 3.301 0 000 9.333a3.301 3.301 0 003.333 3.334C4.973 12.667 6.3 11.54 6.6 10h1.1l1.847-1.847c-.14.36-.214.76-.214 1.18a3.301 3.301 0 003.334 3.334A3.301 3.301 0 0016 9.333c0-1.766-1.313-3.18-3.04-3.313zM5.213 10c-.28.767-1.026 1.333-1.88 1.333-1.086 0-2-.913-2-2 0-1.086.914-2 2-2 .854 0 1.6.567 1.88 1.334h-1.88V10h1.88zm7.454 1.333c-1.107 0-2-.893-2-2 0-1.106.893-2 2-2 1.106 0 2 .894 2 2 0 1.107-.894 2-2 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="motorcycle_svg__b" fill="#fff">
        <use xlinkHref="#motorcycle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#motorcycle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMotorcycle
