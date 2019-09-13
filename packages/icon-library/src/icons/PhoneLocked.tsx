import React, { SVGProps } from 'react'

const SvgPhoneLocked = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phone-locked_svg__a"
        d="M13.333 10.333a7.574 7.574 0 01-2.38-.38.68.68 0 00-.68.16L8.807 11.58a10.03 10.03 0 01-4.394-4.393L5.88 5.713a.64.64 0 00.167-.666 7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667V11c0-.367-.3-.667-.667-.667zm0-7.666v-.334a1.667 1.667 0 00-3.333 0v.334c-.367 0-.667.3-.667.666V6c0 .367.3.667.667.667h3.333c.367 0 .667-.3.667-.667V3.333c0-.366-.3-.666-.667-.666zm-.533 0h-2.267v-.334a1.132 1.132 0 112.267 0v.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phone-locked_svg__b" fill="#fff">
        <use xlinkHref="#phone-locked_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phone-locked_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoneLocked
