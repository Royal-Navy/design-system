import React, { SVGProps } from 'react'

const SvgAssistant = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="assistant_svg__a"
        d="M12.667 1.333H3.333C2.6 1.333 2 1.933 2 2.667V12c0 .733.6 1.333 1.333 1.333H6l2 2 2-2h2.667c.733 0 1.333-.6 1.333-1.333V2.667c0-.734-.6-1.334-1.333-1.334zM9.253 8.587L8 11.333 6.747 8.587 4 7.333 6.747 6.08 8 3.333 9.253 6.08 12 7.333 9.253 8.587z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="assistant_svg__b" fill="#fff">
        <use xlinkHref="#assistant_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#assistant_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAssistant
