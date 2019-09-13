import React, { SVGProps } from 'react'

const SvgMovieFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="movie-filter_svg__a"
        d="M12 2.667l1.333 2h-2l-1.333-2H8.667l1.333 2H8l-1.333-2H5.333l1.334 2h-2l-1.334-2h-.666c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V2.667H12zm-4.5 7.5L6.667 12l-.834-1.833L4 9.333 5.833 8.5l.834-1.833L7.5 8.5l1.833.833-1.833.834zm3.793-2.207l-.626 1.373-.627-1.373-1.373-.627 1.373-.626.627-1.374.626 1.374 1.374.626-1.374.627z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="movie-filter_svg__b" fill="#fff">
        <use xlinkHref="#movie-filter_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#movie-filter_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMovieFilter
