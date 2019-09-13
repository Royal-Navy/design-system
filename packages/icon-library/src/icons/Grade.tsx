import React, { SVGProps } from 'react'

const SvgGrade = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="grade_svg__a"
        d="M8 11.513L12.12 14l-1.093-4.687 3.64-3.153-4.794-.407L8 1.333l-1.873 4.42-4.794.407 3.64 3.153L3.88 14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="grade_svg__b" fill="#fff">
        <use xlinkHref="#grade_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#grade_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGrade
