import React, { SVGProps } from 'react'

const SvgStars = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="stars_svg__a"
        d="M7.993 1.333A6.663 6.663 0 001.333 8c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0014.667 8a6.67 6.67 0 00-6.674-6.667zM10.82 12L8 10.3 5.18 12l.747-3.207L3.44 6.64l3.28-.28L8 3.333l1.28 3.02 3.28.28-2.487 2.154L10.82 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="stars_svg__b" fill="#fff">
        <use xlinkHref="#stars_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#stars_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStars
