import React, { SVGProps } from 'react'

const SvgNoteAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="note-add_svg__a"
        d="M9.333 1.333H4c-.733 0-1.327.6-1.327 1.334l-.006 10.666c0 .734.593 1.334 1.326 1.334H12c.733 0 1.333-.6 1.333-1.334v-8l-4-4zm1.334 9.334h-2v2H7.333v-2h-2V9.333h2v-2h1.334v2h2v1.334zM8.667 6V2.333L12.333 6H8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="note-add_svg__b" fill="#fff">
        <use xlinkHref="#note-add_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#note-add_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNoteAdd
