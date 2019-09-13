import React, { SVGProps } from 'react'

const SvgCenterFocusWeak = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="center-focus-weak_svg__a"
        d="M3.333 10H2v2.667C2 13.4 2.6 14 3.333 14H6v-1.333H3.333V10zm0-6.667H6V2H3.333C2.6 2 2 2.6 2 3.333V6h1.333V3.333zM12.667 2H10v1.333h2.667V6H14V3.333C14 2.6 13.4 2 12.667 2zm0 10.667H10V14h2.667C13.4 14 14 13.4 14 12.667V10h-1.333v2.667zM8 5.333a2.666 2.666 0 100 5.334 2.666 2.666 0 100-5.334zm0 4c-.733 0-1.333-.6-1.333-1.333S7.267 6.667 8 6.667s1.333.6 1.333 1.333S8.733 9.333 8 9.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="center-focus-weak_svg__b" fill="#fff">
        <use xlinkHref="#center-focus-weak_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#center-focus-weak_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCenterFocusWeak
