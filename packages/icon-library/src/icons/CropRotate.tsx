import React, { SVGProps } from 'react'

const SvgCropRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-rotate_svg__a"
        d="M4.98 14.327A7.021 7.021 0 011 8.667H0C.34 12.773 3.773 16 7.967 16c.153 0 .293-.013.44-.02l-2.54-2.547-.887.894zM8.033 0c-.153 0-.293.013-.44.027l2.54 2.54.887-.887A7 7 0 0115 7.333h1C15.66 3.227 12.227 0 8.033 0zm2.634 9.333H12v-4C12 4.593 11.4 4 10.667 4h-4v1.333h4v4zm-5.334 1.334v-8H4V4H2.667v1.333H4v5.334C4 11.4 4.593 12 5.333 12h5.334v1.333H12V12h1.333v-1.333h-8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-rotate_svg__b" fill="#fff">
        <use xlinkHref="#crop-rotate_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-rotate_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCropRotate
