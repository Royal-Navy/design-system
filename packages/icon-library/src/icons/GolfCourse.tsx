import React, { SVGProps } from 'react'

const SvgGolfCourse = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="golf-course_svg__a"
        d="M13 14a1 1 0 110-2 1 1 0 010 2zM11.333 3.947l-4 2.04v6.033c1.894.107 3.334.653 3.334 1.313 0 .734-1.794 1.334-4 1.334-2.207 0-4-.6-4-1.334 0-.493.806-.92 2-1.153v1.153H6v-12l5.333 2.614z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="golf-course_svg__b" fill="#fff">
        <use xlinkHref="#golf-course_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#golf-course_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGolfCourse
