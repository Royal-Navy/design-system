import React, { SVGProps } from 'react'

const SvgPhoneForwarded = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phone-forwarded_svg__a"
        d="M12 7.333L15.333 4 12 .667v2H9.333v2.666H12v2zm1.333 3a7.574 7.574 0 01-2.38-.38.68.68 0 00-.68.16L8.807 11.58a10.03 10.03 0 01-4.394-4.393L5.88 5.713a.64.64 0 00.167-.666 7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667V11c0-.367-.3-.667-.667-.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phone-forwarded_svg__b" fill="#fff">
        <use xlinkHref="#phone-forwarded_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phone-forwarded_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoneForwarded
