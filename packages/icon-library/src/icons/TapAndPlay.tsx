import React, { SVGProps } from 'react'

const SvgTapAndPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tap-and-play_svg__a"
        d="M1.333 10.667V12a3.335 3.335 0 013.334 3.333H6a4.663 4.663 0 00-4.667-4.666zm0 2.666v2h2c0-1.106-.893-2-2-2zm0-5.333v1.333a6 6 0 016 6h1.334A7.33 7.33 0 001.333 8zm10-7.327L4.667.667c-.734 0-1.334.6-1.334 1.333v4.913c.46.107.907.247 1.334.427V3.333h6.666V12h-2.02a8.67 8.67 0 01.634 2.667h1.386c.734 0 1.334-.6 1.334-1.334V2c0-.733-.6-1.327-1.334-1.327z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tap-and-play_svg__b" fill="#fff">
        <use xlinkHref="#tap-and-play_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tap-and-play_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTapAndPlay
