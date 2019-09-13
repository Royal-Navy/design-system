import React, { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="search_svg__a"
        d="M10.333 9.333h-.526l-.187-.18a4.314 4.314 0 001.047-2.82 4.333 4.333 0 10-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="search_svg__b" fill="#fff">
        <use xlinkHref="#search_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#search_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSearch
