import React, { SVGProps } from 'react'

const SvgPhoneAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phone-android_svg__a"
        d="M10.667.667H5.333c-1.106 0-2 .893-2 2v10.666c0 1.107.894 2 2 2h5.334c1.106 0 2-.893 2-2V2.667c0-1.107-.894-2-2-2zM9.333 14H6.667v-.667h2.666V14zm2.167-2h-7V2.667h7V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phone-android_svg__b" fill="#fff">
        <use xlinkHref="#phone-android_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phone-android_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoneAndroid
