import React, { SVGProps } from 'react'

const SvgLocalMovies = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-movies_svg__a"
        d="M12 2v1.333h-1.333V2H5.333v1.333H4V2H2.667v12H4v-1.333h1.333V14h5.334v-1.333H12V14h1.333V2H12zm-6.667 9.333H4V10h1.333v1.333zm0-2.666H4V7.333h1.333v1.334zm0-2.667H4V4.667h1.333V6zM12 11.333h-1.333V10H12v1.333zm0-2.666h-1.333V7.333H12v1.334zM12 6h-1.333V4.667H12V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-movies_svg__b" fill="#fff">
        <use xlinkHref="#local-movies_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-movies_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalMovies
