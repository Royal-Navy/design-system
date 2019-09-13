import React, { SVGProps } from 'react'

const SvgViewStream = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-stream_svg__a"
        d="M2.667 12H14V8H2.667v4zm0-8.667v4H14v-4H2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-stream_svg__b" fill="#fff">
        <use xlinkHref="#view-stream_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-stream_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewStream
