import React, { SVGProps } from 'react'

const SvgMovie = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="movie_svg__a"
        d="M12 2.667l1.333 2.666h-2L10 2.667H8.667L10 5.333H8L6.667 2.667H5.333l1.334 2.666h-2L3.333 2.667h-.666c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V2.667H12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="movie_svg__b" fill="#fff">
        <use xlinkHref="#movie_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#movie_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMovie
