import React, { SVGProps } from 'react'

const SvgRecordVoiceOver = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="record-voice-over_svg__a"
        d="M6 8.667a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zM6 10c1.78 0 5.333.893 5.333 2.667V14H.667v-1.333C.667 10.893 4.22 10 6 10zm5.173-6.427c1.347 1.467 1.347 3.5 0 4.847l-1.12-1.127c.56-.786.56-1.806 0-2.593l1.12-1.127zm2.207-2.24c2.607 2.7 2.6 6.74 0 9.334L12.293 9.58c1.847-2.12 1.847-5.147 0-7.16l1.087-1.087z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="record-voice-over_svg__b" fill="#fff">
        <use xlinkHref="#record-voice-over_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#record-voice-over_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRecordVoiceOver
