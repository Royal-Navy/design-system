import React, { SVGProps } from 'react'

const SvgInvertColors = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="invert-colors_svg__a"
        d="M11.773 5.287L8 1.513 4.227 5.287a5.335 5.335 0 000 7.54A5.32 5.32 0 008 14.387a5.32 5.32 0 003.773-1.56 5.335 5.335 0 000-7.54zM8 13.06a3.952 3.952 0 01-2.827-1.173A3.964 3.964 0 014 9.06c0-1.067.413-2.073 1.173-2.827L8 3.4v9.66z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="invert-colors_svg__b" fill="#fff">
        <use xlinkHref="#invert-colors_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#invert-colors_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInvertColors
