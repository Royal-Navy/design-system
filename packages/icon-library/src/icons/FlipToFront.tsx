import React, { SVGProps } from 'react'

const SvgFlipToFront = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flip-to-front_svg__a"
        d="M2 8.667h1.333V7.333H2v1.334zm0 2.666h1.333V10H2v1.333zM3.333 14v-1.333H2C2 13.4 2.593 14 3.333 14zM2 6h1.333V4.667H2V6zm8 8h1.333v-1.333H10V14zm2.667-12H6c-.74 0-1.333.6-1.333 1.333V10c0 .733.593 1.333 1.333 1.333h6.667c.733 0 1.333-.6 1.333-1.333V3.333C14 2.6 13.4 2 12.667 2zm0 8H6V3.333h6.667V10zm-5.334 4h1.334v-1.333H7.333V14zm-2.666 0H6v-1.333H4.667V14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flip-to-front_svg__b" fill="#fff">
        <use xlinkHref="#flip-to-front_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flip-to-front_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlipToFront
