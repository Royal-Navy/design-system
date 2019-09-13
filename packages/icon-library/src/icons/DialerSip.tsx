import React, { SVGProps } from 'react'

const SvgDialerSip = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="dialer-sip_svg__a"
        d="M11.333 2h-.666v3.333h.666V2zM10 3.333H8.667v-.666H10V2H8v2h1.333v.667H8v.666h2v-2zM12 2v3.333h.667V4H14V2h-2zm1.333 1.333h-.666v-.666h.666v.666zm0 7a7.574 7.574 0 01-2.38-.38.665.665 0 00-.673.16L8.813 11.58A10.03 10.03 0 014.42 7.187l1.467-1.474a.65.65 0 00.16-.666 7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667V11c0-.367-.3-.667-.667-.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dialer-sip_svg__b" fill="#fff">
        <use xlinkHref="#dialer-sip_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#dialer-sip_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDialerSip
