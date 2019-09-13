import React, { SVGProps } from 'react'

const SvgContentPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="content-paste_svg__a"
        d="M12.667 1.333H9.88A2.007 2.007 0 008 0c-.867 0-1.6.56-1.88 1.333H3.333C2.6 1.333 2 1.933 2 2.667v10.666c0 .734.6 1.334 1.333 1.334h9.334c.733 0 1.333-.6 1.333-1.334V2.667c0-.734-.6-1.334-1.333-1.334zM8 1.333c.367 0 .667.3.667.667 0 .367-.3.667-.667.667A.669.669 0 017.333 2c0-.367.3-.667.667-.667zm4.667 12H3.333V2.667h1.334v2h6.666v-2h1.334v10.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="content-paste_svg__b" fill="#fff">
        <use xlinkHref="#content-paste_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#content-paste_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgContentPaste
