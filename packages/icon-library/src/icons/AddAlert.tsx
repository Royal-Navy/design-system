import React, { SVGProps } from 'react'

const SvgAddAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="add-alert_svg__a"
        d="M6.673 14.007a1.326 1.326 0 102.654 0H6.673zm5.914-2.794v-3.88c0-2.166-1.5-3.98-3.527-4.46v-.48c0-.586-.473-1.06-1.06-1.06-.587 0-1.06.474-1.06 1.06v.48a4.582 4.582 0 00-3.527 4.46v3.88L2 12.627v.706h12v-.706l-1.413-1.414zm-1.92-2.54h-2v2H7.333v-2h-2v-1.34h2v-2h1.334v2h2v1.34z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="add-alert_svg__b" fill="#fff">
        <use xlinkHref="#add-alert_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#add-alert_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAddAlert
