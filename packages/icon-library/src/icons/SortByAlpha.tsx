import React, { SVGProps } from 'react'

const SvgSortByAlpha = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sort-by-alpha_svg__a"
        d="M9.96 3.107H6.813l1.574-1.574L9.96 3.107zm-3.127 9.806H9.94l-1.553 1.554-1.554-1.554zM4.067 4.18l-3 7.64h1.226l.614-1.633h3.406l.614 1.633h1.226L5.16 4.18H4.067zm-.754 4.913L4.607 5.64 5.9 9.093H3.313zm7.174 1.667h4.08v1.06H8.88v-.86l3.947-5.707h-3.92V4.187h5.533v.84l-3.953 5.733z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sort-by-alpha_svg__b" fill="#fff">
        <use xlinkHref="#sort-by-alpha_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sort-by-alpha_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSortByAlpha
