import React, { SVGProps } from 'react'

const SvgAttachFile = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="attach-file_svg__a"
        d="M11.556 12.444A3.555 3.555 0 018 16a3.555 3.555 0 01-3.556-3.556V2.667A2.663 2.663 0 017.111 0a2.663 2.663 0 012.667 2.667v8c0 .977-.8 1.777-1.778 1.777s-1.778-.8-1.778-1.777V3.556h.89v7.11c0 .49.4.89.888.89.489 0 .889-.4.889-.89v-8c0-.977-.8-1.777-1.778-1.777s-1.778.8-1.778 1.778v9.777A2.663 2.663 0 008 15.111a2.663 2.663 0 002.667-2.667V3.556h.889v8.888z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="attach-file_svg__b" fill="#fff">
        <use xlinkHref="#attach-file_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#attach-file_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAttachFile
