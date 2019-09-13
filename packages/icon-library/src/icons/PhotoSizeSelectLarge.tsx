import React, { SVGProps } from 'react'

const SvgPhotoSizeSelectLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="photo-size-select-large_svg__a"
        d="M14 10h1.333v1.333H14V10zm0-2.667h1.333v1.334H14V7.333zm1.333 5.334H14V14c.667 0 1.333-.667 1.333-1.333zM8.667 2H10v1.333H8.667V2zM14 4.667h1.333V6H14V4.667zM14 2v1.333h1.333C15.333 2.667 14.667 2 14 2zM.667 4.667H2V6H.667V4.667zM11.333 2h1.334v1.333h-1.334V2zm0 10.667h1.334V14h-1.334v-1.333zM2 2C1.333 2 .667 2.667.667 3.333H2V2zm4 0h1.333v1.333H6V2zM3.333 2h1.334v1.333H3.333V2zM.667 7.333v5.334C.667 13.4 1.267 14 2 14h8V7.333H.667zM2 12.667l1.667-2.14L4.86 11.96l1.667-2.147 2.14 2.854H2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="photo-size-select-large_svg__b" fill="#fff">
        <use xlinkHref="#photo-size-select-large_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#photo-size-select-large_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhotoSizeSelectLarge
