import React, { SVGProps } from 'react'

const SvgFormatColorFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-color-fill_svg__a"
        d="M0 13.333h16V16H0v-2.667zm12.889-5.449s1.333 1.45 1.333 2.33c0 .737-.595 1.333-1.333 1.333a1.332 1.332 0 01-1.333-1.334c0-.889 1.333-2.329 1.333-2.329zm-1.591-1.848a.896.896 0 010 1.262l-4 4a.91.91 0 01-.631.258.882.882 0 01-.631-.267l-4-4a.885.885 0 010-1.253l3.688-3.68L4.311.942 5.253 0l6.045 6.036zm-7.556.186h5.85L6.666 3.298 3.742 6.222z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-color-fill_svg__b" fill="#fff">
        <use xlinkHref="#format-color-fill_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-color-fill_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatColorFill
