import React, { SVGProps } from 'react'

const SvgTextFields = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="text-fields_svg__a"
        d="M1.667 2.667v2H5v8h2v-8h3.333v-2H1.667zM14.333 6h-6v2h2v4.667h2V8h2V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="text-fields_svg__b" fill="#fff">
        <use xlinkHref="#text-fields_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#text-fields_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTextFields
