import React, { SVGProps } from 'react'

const SvgFormatClear = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-clear_svg__a"
        d="M2.018 4.044l4.586 4.578-2.16 4.711h2.223l1.457-3.182 4.08 4.071 1.13-1.129L3.155 2.907 2.018 4.044zm3.155-1.377l1.778 1.777h1.565l-.49 1.076 1.52 1.52 1.192-2.596h3.484V2.667H5.173z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-clear_svg__b" fill="#fff">
        <use xlinkHref="#format-clear_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-clear_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatClear
