import React, { SVGProps } from 'react'

const SvgFormatShapes = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-shapes_svg__a"
        d="M15.333 4.667v-4h-4V2H4.667V.667h-4v4H2v6.666H.667v4h4V14h6.666v1.333h4v-4H14V4.667h1.333zM2 2h1.333v1.333H2V2zm1.333 12H2v-1.333h1.333V14zm8-1.333H4.667v-1.334H3.333V4.667h1.334V3.333h6.666v1.334h1.334v6.666h-1.334v1.334zM14 14h-1.333v-1.333H14V14zM12.667 3.333V2H14v1.333h-1.333zm-3.514 6H6.827l-.487 1.334H5.26l2.267-6h.933l2.273 6H9.647l-.494-1.334zm-2.026-.84h1.74L8 5.94l-.873 2.553z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-shapes_svg__b" fill="#fff">
        <use xlinkHref="#format-shapes_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-shapes_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatShapes
