import React, { SVGProps } from 'react'

const SvgPhoneBluetoothSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phone-bluetooth-speaker_svg__a"
        d="M9.807 6.333l1.526-1.526v2.526h.334l1.9-1.9L12.14 4l1.433-1.433-1.906-1.9h-.334v2.526L9.807 1.667l-.474.473L11.193 4l-1.86 1.86.474.473zM12 1.94l.627.627-.627.626V1.94zm0 2.867l.627.626L12 6.06V4.807zm1.333 5.526a7.574 7.574 0 01-2.38-.38.68.68 0 00-.68.16L8.807 11.58a10.03 10.03 0 01-4.394-4.393L5.88 5.713a.64.64 0 00.167-.666 7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667V11c0-.367-.3-.667-.667-.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phone-bluetooth-speaker_svg__b" fill="#fff">
        <use xlinkHref="#phone-bluetooth-speaker_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phone-bluetooth-speaker_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoneBluetoothSpeaker
