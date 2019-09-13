import React, { SVGProps } from 'react'

const SvgTabletAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tablet-android_svg__a"
        d="M12 0H4C2.893 0 2 .893 2 2v12c0 1.107.893 2 2 2h8c1.107 0 2-.893 2-2V2c0-1.107-.893-2-2-2zM9.333 14.667H6.667V14h2.666v.667zm3.5-2H3.167V2h9.666v10.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tablet-android_svg__b" fill="#fff">
        <use xlinkHref="#tablet-android_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tablet-android_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTabletAndroid
