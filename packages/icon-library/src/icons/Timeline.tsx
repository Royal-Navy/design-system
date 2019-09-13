import React, { SVGProps } from 'react'

const SvgTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="timeline_svg__a"
        d="M15.333 5.333c0 .734-.6 1.334-1.333 1.334-.12 0-.233-.014-.34-.047l-2.373 2.367A1.337 1.337 0 0110 10.667a1.337 1.337 0 01-1.287-1.68l-1.7-1.7a1.178 1.178 0 01-.346.046c-.12 0-.24-.013-.347-.046l-3.033 3.04c.033.106.046.22.046.34C3.333 11.4 2.733 12 2 12S.667 11.4.667 10.667c0-.734.6-1.334 1.333-1.334.12 0 .233.014.34.047l3.04-3.033a1.337 1.337 0 011.287-1.68 1.337 1.337 0 011.286 1.68l1.7 1.7C9.76 8.013 9.88 8 10 8c.12 0 .24.013.347.047l2.366-2.374a1.133 1.133 0 01-.046-.34C12.667 4.6 13.267 4 14 4s1.333.6 1.333 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="timeline_svg__b" fill="#fff">
        <use xlinkHref="#timeline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#timeline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTimeline
