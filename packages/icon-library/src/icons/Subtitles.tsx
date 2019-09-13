import React, { SVGProps } from 'react'

const SvgSubtitles = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="subtitles_svg__a"
        d="M13.333 2.667H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zM2.667 8h2.666v1.333H2.667V8zm6.666 4H2.667v-1.333h6.666V12zm4 0h-2.666v-1.333h2.666V12zm0-2.667H6.667V8h6.666v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="subtitles_svg__b" fill="#fff">
        <use xlinkHref="#subtitles_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#subtitles_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSubtitles
