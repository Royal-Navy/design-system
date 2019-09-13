import React, { SVGProps } from 'react'

const SvgLocalConvenienceStore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-convenience-store_svg__a"
        d="M12.667 4.667v-2H3.333v2h-2v8.666h5.334v-2.666h2.666v2.666h5.334V4.667h-2zm-5.334 2H6v.666h1.333V8h-2V6h1.334v-.667H5.333v-.666h2v2zM10.667 8H10V6.667H8.667v-2h.666V6H10V4.667h.667V8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-convenience-store_svg__b" fill="#fff">
        <use xlinkHref="#local-convenience-store_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-convenience-store_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalConvenienceStore
