import React, { SVGProps } from 'react'

const SvgSurroundSound = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="surround-sound_svg__a"
        d="M13.333 2.667H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zm-8.16 8.16l-.94.94A5.273 5.273 0 012.667 8a5.32 5.32 0 011.56-3.773l.94.94A4.03 4.03 0 004 8c0 1.027.393 2.047 1.173 2.827zM8 10.667a2.666 2.666 0 110-5.334 2.666 2.666 0 110 5.334zm3.773 1.106l-.94-.94A4.03 4.03 0 0012 8a3.983 3.983 0 00-1.173-2.827l.94-.94A5.273 5.273 0 0113.333 8a5.32 5.32 0 01-1.56 3.773zM8 6.667c-.733 0-1.333.6-1.333 1.333S7.267 9.333 8 9.333 9.333 8.733 9.333 8 8.733 6.667 8 6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="surround-sound_svg__b" fill="#fff">
        <use xlinkHref="#surround-sound_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#surround-sound_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSurroundSound
