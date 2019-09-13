import React, { SVGProps } from 'react'

const SvgDvr = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="dvr_svg__a"
        d="M14 2H2C1.267 2 .667 2.6.667 3.333v8c0 .734.6 1.334 1.333 1.334h3.333V14h5.334v-1.333H14c.733 0 1.327-.6 1.327-1.334l.006-8C15.333 2.6 14.733 2 14 2zm0 9.333H2v-8h12v8zm-1.333-6H5.333v1.334h7.334V5.333zm0 2.667H5.333v1.333h7.334V8zm-8-2.667H3.333v1.334h1.334V5.333zm0 2.667H3.333v1.333h1.334V8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dvr_svg__b" fill="#fff">
        <use xlinkHref="#dvr_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#dvr_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDvr
