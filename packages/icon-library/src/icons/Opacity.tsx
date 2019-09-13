import React, { SVGProps } from 'react'

const SvgOpacity = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="opacity_svg__a"
        d="M11.773 5.333L8 1.567 4.227 5.333a5.346 5.346 0 00-1.56 3.76c0 1.334.52 2.74 1.56 3.78a5.327 5.327 0 007.546 0 5.392 5.392 0 001.56-3.78c0-1.333-.52-2.72-1.56-3.76zM4 9.333C4.007 8 4.413 7.153 5.173 6.4L8 3.513l2.827 2.92c.76.747 1.166 1.567 1.173 2.9H4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="opacity_svg__b" fill="#fff">
        <use xlinkHref="#opacity_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#opacity_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgOpacity
