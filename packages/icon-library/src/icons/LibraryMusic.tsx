import React, { SVGProps } from 'react'

const SvgLibraryMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="library-music_svg__a"
        d="M13.333 1.333h-8C4.6 1.333 4 1.933 4 2.667v8C4 11.4 4.6 12 5.333 12h8c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zM12 4.667h-2v3.666a1.667 1.667 0 11-1.667-1.666c.38 0 .72.126 1 .34V3.333H12v1.334zM2.667 4H1.333v9.333c0 .734.6 1.334 1.334 1.334H12v-1.334H2.667V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="library-music_svg__b" fill="#fff">
        <use xlinkHref="#library-music_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#library-music_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLibraryMusic
