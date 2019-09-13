import React, { SVGProps } from 'react'

const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flip_svg__a"
        d="M10 14h1.333v-1.333H10V14zm2.667-8H14V4.667h-1.333V6zM2 3.333v9.334C2 13.4 2.6 14 3.333 14H6v-1.333H3.333V3.333H6V2H3.333C2.6 2 2 2.6 2 3.333zM12.667 2v1.333H14C14 2.6 13.4 2 12.667 2zM7.333 15.333h1.334V.667H7.333v14.666zm5.334-4H14V10h-1.333v1.333zm-2.667-8h1.333V2H10v1.333zm2.667 5.334H14V7.333h-1.333v1.334zm0 5.333C13.4 14 14 13.4 14 12.667h-1.333V14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flip_svg__b" fill="#fff">
        <use xlinkHref="#flip_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flip_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlip
