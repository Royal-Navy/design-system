import React, { SVGProps } from 'react'

const SvgPhoneInTalk = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phone-in-talk_svg__a"
        d="M13.333 10.333a7.574 7.574 0 01-2.38-.38.68.68 0 00-.68.16L8.807 11.58a10.03 10.03 0 01-4.394-4.393L5.88 5.713a.64.64 0 00.167-.666 7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667V11c0-.367-.3-.667-.667-.667zM12.667 8H14a6 6 0 00-6-6v1.333A4.663 4.663 0 0112.667 8zM10 8h1.333A3.335 3.335 0 008 4.667V6c1.107 0 2 .893 2 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phone-in-talk_svg__b" fill="#fff">
        <use xlinkHref="#phone-in-talk_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phone-in-talk_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoneInTalk
