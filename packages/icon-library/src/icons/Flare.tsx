import React, { SVGProps } from 'react'

const SvgFlare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flare_svg__a"
        d="M4.667 7.333h-4v1.334h4V7.333zm1.446-2.16L4.7 3.76l-.94.94 1.413 1.413.94-.94zM8.667.667H7.333v4h1.334v-4zM12.24 4.7l-.94-.94-1.413 1.413.94.94L12.24 4.7zm-.907 2.633v1.334h4V7.333h-4zM8 6c-1.107 0-2 .893-2 2s.893 2 2 2 2-.893 2-2-.893-2-2-2zm1.887 4.827L11.3 12.24l.94-.94-1.413-1.413-.94.94zM3.76 11.3l.94.94 1.413-1.413-.94-.94L3.76 11.3zm3.573 4.033h1.334v-4H7.333v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flare_svg__b" fill="#fff">
        <use xlinkHref="#flare_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flare_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlare
