import React, { SVGProps } from 'react'

const SvgKeyboardVoice = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-voice_svg__a"
        d="M8 10a1.992 1.992 0 001.993-2L10 4c0-1.107-.893-2-2-2s-2 .893-2 2v4c0 1.107.893 2 2 2zm3.533-2c0 2-1.693 3.4-3.533 3.4-1.84 0-3.533-1.4-3.533-3.4H3.333c0 2.28 1.814 4.153 4 4.48v2.187h1.334V12.48c2.186-.32 4-2.2 4-4.48h-1.134z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-voice_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-voice_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-voice_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardVoice
