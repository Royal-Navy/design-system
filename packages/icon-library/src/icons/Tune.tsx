import React, { SVGProps } from 'react'

const SvgTune = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tune_svg__a"
        d="M2 11.333v1.334h4v-1.334H2zm0-8v1.334h6.667V3.333H2zM8.667 14v-1.333H14v-1.334H8.667V10H7.333v4h1.334zm-4-8v1.333H2v1.334h2.667V10H6V6H4.667zM14 8.667V7.333H7.333v1.334H14zM10 6h1.333V4.667H14V3.333h-2.667V2H10v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tune_svg__b" fill="#fff">
        <use xlinkHref="#tune_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tune_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTune
