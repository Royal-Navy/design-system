import React, { SVGProps } from 'react'

const SvgChromeReaderMode = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="chrome-reader-mode_svg__a"
        d="M8.667 8h4.666v1H8.667V8zm0-1.667h4.666v1H8.667v-1zm0 3.334h4.666v1H8.667v-1zm5.333-7H2c-.733 0-1.333.6-1.333 1.333v8.667C.667 13.4 1.267 14 2 14h12c.733 0 1.333-.6 1.333-1.333V4c0-.733-.6-1.333-1.333-1.333zm0 10H8V4h6v8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chrome-reader-mode_svg__b" fill="#fff">
        <use xlinkHref="#chrome-reader-mode_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#chrome-reader-mode_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgChromeReaderMode
