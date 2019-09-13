import React, { SVGProps } from 'react'

const SvgPeople = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="people_svg__a"
        d="M5.333 7.111a1.777 1.777 0 10.001-3.554 1.777 1.777 0 000 3.554zm5.334 0a1.777 1.777 0 100-3.554 1.777 1.777 0 000 3.554zM5.333 8.178C3.85 8.178.89 8.916.89 10.4v1.156h8.889V10.4c0-1.484-2.96-2.222-4.445-2.222zm5.334 0c-.223 0-.48.018-.747.053.702.533 1.191 1.245 1.191 2.169v1.156h4V10.4c0-1.484-2.96-2.222-4.444-2.222z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="people_svg__b" fill="#fff">
        <use xlinkHref="#people_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#people_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPeople
