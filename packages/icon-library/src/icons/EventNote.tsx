import React, { SVGProps } from 'react'

const SvgEventNote = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="event-note_svg__a"
        d="M11.556 6.222H4.444V8h7.112V6.222zM8.889 8.89H4.444v1.778H8.89V8.889zm4.444-7.111h-.889v-.89h-1.777v.89H5.333v-.89H3.556v.89h-.89c-.488 0-.888.4-.888.889v10.666c0 .49.4.89.889.89h10.666c.49 0 .89-.4.89-.89V2.667c0-.49-.4-.89-.89-.89zm-.889 10.666H3.556v-7.11h8.888v7.11z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="event-note_svg__b" fill="#fff">
        <use xlinkHref="#event-note_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#event-note_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEventNote
