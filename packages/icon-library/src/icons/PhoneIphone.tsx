import React, { SVGProps } from 'react'

const SvgPhoneIphone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phone-iphone_svg__a"
        d="M10.333.667H5c-.92 0-1.667.746-1.667 1.666v11.334c0 .92.747 1.666 1.667 1.666h5.333c.92 0 1.667-.746 1.667-1.666V2.333c0-.92-.747-1.666-1.667-1.666zm-2.666 14c-.554 0-1-.447-1-1 0-.554.446-1 1-1 .553 0 1 .446 1 1 0 .553-.447 1-1 1zm3-2.667h-6V2.667h6V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phone-iphone_svg__b" fill="#fff">
        <use xlinkHref="#phone-iphone_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phone-iphone_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoneIphone
