import React, { SVGProps } from 'react'

const SvgHeadsetMic = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="headset-mic_svg__a"
        d="M8 .667a6 6 0 00-6 6v4.666c0 1.107.893 2 2 2h2V8H3.333V6.667A4.663 4.663 0 018 2a4.663 4.663 0 014.667 4.667V8H10v5.333h2.667V14H8v1.333h4c1.107 0 2-.893 2-2V6.667a6 6 0 00-6-6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="headset-mic_svg__b" fill="#fff">
        <use xlinkHref="#headset-mic_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#headset-mic_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHeadsetMic
