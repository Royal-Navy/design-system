import React, { SVGProps } from 'react'

const SvgFormatListNumbered = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-list-numbered_svg__a"
        d="M1.778 11.556h1.778V12h-.89v.889h.89v.444H1.778v.89h2.666v-3.556H1.778v.889zm0-4.445h1.6l-1.6 1.867v.8h2.666v-.89h-1.6l1.6-1.866v-.8H1.778v.89zm.889-1.778h.889V1.778H1.778v.889h.889v2.666zm3.555-2.666v1.777h8V2.667h-8zm0 10.666h8v-1.777h-8v1.777zm0-4.444h8V7.11h-8V8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-list-numbered_svg__b" fill="#fff">
        <use xlinkHref="#format-list-numbered_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-list-numbered_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatListNumbered
