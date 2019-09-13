import React, { SVGProps } from 'react'

const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="note_svg__a"
        d="M14.667 6.667l-4-4h-8c-.734 0-1.334.6-1.334 1.333v8.007c0 .733.6 1.326 1.334 1.326l10.666-.006c.734 0 1.334-.594 1.334-1.327V6.667zm-4.667-3l3.667 3.666H10V3.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="note_svg__b" fill="#fff">
        <use xlinkHref="#note_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#note_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNote
