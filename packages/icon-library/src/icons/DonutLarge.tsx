import React, { SVGProps } from 'react'

const SvgDonutLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="donut-large_svg__a"
        d="M7.333 3.387V1.333c-3.333.334-6 3.207-6 6.667s2.667 6.333 6 6.667v-2.054c-2-.32-4-2.266-4-4.613 0-2.347 2-4.293 4-4.613zm5.314 3.946h2.02c-.314-3.333-2.667-5.686-6-6v2.054c2 .286 3.693 1.946 3.98 3.946zm-3.98 5.28v2.054c3.333-.314 5.686-2.667 6-6h-2.02c-.287 2-1.98 3.66-3.98 3.946z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="donut-large_svg__b" fill="#fff">
        <use xlinkHref="#donut-large_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#donut-large_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDonutLarge
