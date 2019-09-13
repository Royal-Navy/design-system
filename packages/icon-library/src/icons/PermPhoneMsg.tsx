import React, { SVGProps } from 'react'

const SvgPermPhoneMsg = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="perm-phone-msg_svg__a"
        d="M13.333 10.333a7.574 7.574 0 01-2.38-.38.68.68 0 00-.68.16L8.807 11.58a10.05 10.05 0 01-4.394-4.387L5.88 5.72c.187-.18.24-.44.167-.673a7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667V11c0-.367-.3-.667-.667-.667zM8 2v6.667l2-2h4V2H8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="perm-phone-msg_svg__b" fill="#fff">
        <use xlinkHref="#perm-phone-msg_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#perm-phone-msg_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPermPhoneMsg
