import React, { SVGProps } from 'react'

const SvgDoNotDisturbOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="do-not-disturb-off_svg__a"
        d="M11.333 7.333v1.334h-.973l3.12 3.12A6.613 6.613 0 0014.667 8 6.67 6.67 0 008 1.333c-1.407 0-2.713.44-3.787 1.187l4.814 4.813h2.306zm-9.82-5.82l-.846.847L2.52 4.213A6.613 6.613 0 001.333 8 6.67 6.67 0 008 14.667c1.407 0 2.713-.44 3.787-1.187l1.853 1.853.847-.846-7.154-7.154-5.82-5.82zm3.154 7.154V7.333h.973l1.333 1.334H4.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="do-not-disturb-off_svg__b" fill="#fff">
        <use xlinkHref="#do-not-disturb-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#do-not-disturb-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDoNotDisturbOff
