import React, { SVGProps } from 'react'

const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="highlight_svg__a"
        d="M4 9.333l2 2v3.334h4v-3.334l2-2V6H4v3.333zm3.333-8h1.334v2H7.333v-2zm-5 2.584l.943-.944 1.413 1.415-.942.943-1.414-1.414zm8.974.473l1.415-1.413.943.942-1.415 1.414-.943-.943z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="highlight_svg__b" fill="#fff">
        <use xlinkHref="#highlight_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#highlight_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHighlight
