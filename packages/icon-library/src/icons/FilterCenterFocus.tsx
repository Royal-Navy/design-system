import React, { SVGProps } from 'react'

const SvgFilterCenterFocus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-center-focus_svg__a"
        d="M3.333 10H2v2.667C2 13.4 2.6 14 3.333 14H6v-1.333H3.333V10zm0-6.667H6V2H3.333C2.6 2 2 2.6 2 3.333V6h1.333V3.333zM12.667 2H10v1.333h2.667V6H14V3.333C14 2.6 13.4 2 12.667 2zm0 10.667H10V14h2.667C13.4 14 14 13.4 14 12.667V10h-1.333v2.667zM8 6c-1.107 0-2 .893-2 2s.893 2 2 2 2-.893 2-2-.893-2-2-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-center-focus_svg__b" fill="#fff">
        <use xlinkHref="#filter-center-focus_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-center-focus_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilterCenterFocus
