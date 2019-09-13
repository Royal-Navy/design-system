import React, { SVGProps } from 'react'

const SvgDonutSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="donut-small_svg__a"
        d="M7.333 6.107V1.333c-3.333.334-6 3.194-6 6.667s2.667 6.333 6 6.667V9.893C6.667 9.62 6 8.88 6 8c0-.88.667-1.62 1.333-1.893zm2.574 1.226h4.76c-.32-3.166-2.667-5.686-6-6v4.774c.666.2 1.013.653 1.24 1.226zm-1.24 2.56v4.774c3.333-.314 5.68-2.834 6-6h-4.76c-.227.573-.574 1.026-1.24 1.226z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="donut-small_svg__b" fill="#fff">
        <use xlinkHref="#donut-small_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#donut-small_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDonutSmall
