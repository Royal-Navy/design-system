import React, { SVGProps } from 'react'

const SvgFilterVintage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-vintage_svg__a"
        d="M12.467 8.267A4.04 4.04 0 0011.893 8a4.04 4.04 0 00.574-.267 4.008 4.008 0 002-3.46 4.005 4.005 0 00-4 0c-.187.107-.36.234-.52.36C9.98 4.427 10 4.213 10 4c0-1.48-.807-2.767-2-3.46C6.807 1.233 6 2.52 6 4c0 .213.02.427.053.633a3.638 3.638 0 00-.52-.366 4.005 4.005 0 00-4 0c0 1.38.714 2.72 2 3.46.187.106.38.193.574.266a4.04 4.04 0 00-.574.267 4.008 4.008 0 00-2 3.46 4.005 4.005 0 004 0c.187-.107.36-.233.52-.36A3.998 3.998 0 008 15.46c1.193-.693 2-1.98 2-3.46 0-.213-.02-.427-.053-.633a4.005 4.005 0 004.52.36 4.008 4.008 0 00-2-3.46zM8 10.667a2.666 2.666 0 110-5.334 2.666 2.666 0 110 5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-vintage_svg__b" fill="#fff">
        <use xlinkHref="#filter-vintage_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-vintage_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilterVintage
