import React, { SVGProps } from 'react'

const SvgSchedule = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="schedule_svg__a"
        d="M7.993 1.333A6.663 6.663 0 001.333 8c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0014.667 8a6.67 6.67 0 00-6.674-6.667zm.007 12A5.332 5.332 0 012.667 8 5.332 5.332 0 018 2.667 5.332 5.332 0 0113.333 8 5.332 5.332 0 018 13.333zm.333-8.666h-1v4l3.5 2.1.5-.82-3-1.78v-3.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="schedule_svg__b" fill="#fff">
        <use xlinkHref="#schedule_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#schedule_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSchedule
