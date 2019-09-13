import React, { SVGProps } from 'react'

const SvgFlipToBack = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flip-to-back_svg__a"
        d="M6 4.667H4.667V6H6V4.667zm0 2.666H4.667v1.334H6V7.333zM6 2c-.74 0-1.333.6-1.333 1.333H6V2zm2.667 8H7.333v1.333h1.334V10zm4-8v1.333H14C14 2.6 13.4 2 12.667 2zm-4 0H7.333v1.333h1.334V2zM6 11.333V10H4.667c0 .733.593 1.333 1.333 1.333zm6.667-2.666H14V7.333h-1.333v1.334zm0-2.667H14V4.667h-1.333V6zm0 5.333c.733 0 1.333-.6 1.333-1.333h-1.333v1.333zM3.333 4.667H2v8C2 13.4 2.593 14 3.333 14h8v-1.333h-8v-8zM10 3.333h1.333V2H10v1.333zm0 8h1.333V10H10v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flip-to-back_svg__b" fill="#fff">
        <use xlinkHref="#flip-to-back_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flip-to-back_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlipToBack
