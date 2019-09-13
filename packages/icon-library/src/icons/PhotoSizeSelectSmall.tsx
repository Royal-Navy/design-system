import React, { SVGProps } from 'react'

const SvgPhotoSizeSelectSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="photo-size-select-small_svg__a"
        d="M15.333 10H14v1.333h1.333V10zm0-2.667H14v1.334h1.333V7.333zm0 5.334H14V14c.667 0 1.333-.667 1.333-1.333zM10 2H8.667v1.333H10V2zm5.333 2.667H14V6h1.333V4.667zM14 2v1.333h1.333C15.333 2.667 14.667 2 14 2zM2 14h5.333v-4H.667v2.667C.667 13.4 1.267 14 2 14zm0-9.333H.667V6H2V4.667zm8 8H8.667V14H10v-1.333zM12.667 2h-1.334v1.333h1.334V2zm0 10.667h-1.334V14h1.334v-1.333zM2 2C1.333 2 .667 2.667.667 3.333H2V2zm0 5.333H.667v1.334H2V7.333zM7.333 2H6v1.333h1.333V2zM4.667 2H3.333v1.333h1.334V2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="photo-size-select-small_svg__b" fill="#fff">
        <use xlinkHref="#photo-size-select-small_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#photo-size-select-small_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhotoSizeSelectSmall
