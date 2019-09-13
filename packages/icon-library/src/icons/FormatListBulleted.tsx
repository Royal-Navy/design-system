import React, { SVGProps } from 'react'

const SvgFormatListBulleted = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-list-bulleted_svg__a"
        d="M6.222 8.889h8V7.11h-8V8.89zm0-6.222v1.777h8V2.667h-8zm0 10.666h8v-1.777h-8v1.777zM2.667 8.89h1.777V7.11H2.667V8.89zm0-6.222v1.777h1.777V2.667H2.667zm0 10.666h1.777v-1.777H2.667v1.777z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-list-bulleted_svg__b" fill="#fff">
        <use xlinkHref="#format-list-bulleted_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-list-bulleted_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatListBulleted
