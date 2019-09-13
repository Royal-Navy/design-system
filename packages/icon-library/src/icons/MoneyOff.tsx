import React, { SVGProps } from 'react'

const SvgMoneyOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="money-off_svg__a"
        d="M8.333 4.6C9.52 4.6 9.96 5.167 10 6h1.473c-.046-1.147-.746-2.2-2.14-2.54V2h-2v1.44c-.353.08-.686.2-.986.36l.98.98c.273-.113.606-.18 1.006-.18zm-4.78-1.893l-.846.846L5 5.847c0 1.386 1.04 2.14 2.607 2.606l2.34 2.34c-.227.32-.7.607-1.614.607-1.373 0-1.913-.613-1.986-1.4H4.88c.08 1.46 1.173 2.28 2.453 2.553V14h2v-1.433c.64-.12 1.214-.367 1.634-.747l1.48 1.48.846-.847-9.74-9.746z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="money-off_svg__b" fill="#fff">
        <use xlinkHref="#money-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#money-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMoneyOff
