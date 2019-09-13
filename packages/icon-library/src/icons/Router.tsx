import React, { SVGProps } from 'react'

const SvgRouter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="router_svg__a"
        d="M13.467 3.933L14 3.4A4.7 4.7 0 0010.667 2a4.7 4.7 0 00-3.334 1.4l.534.533c.8-.733 1.8-1.133 2.8-1.133 1 0 2 .4 2.8 1.133zm-.6.534c-.6-.6-1.4-.934-2.2-.934-.8 0-1.6.334-2.2.934L9 5c.467-.467 1.067-.667 1.667-.667.6 0 1.2.2 1.666.667l.534-.533zm-.2 4.2h-1.334V6H10v2.667H3.333C2.6 8.667 2 9.267 2 10v2.667C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V10c0-.733-.6-1.333-1.333-1.333zM5.333 12H4v-1.333h1.333V12zm2.334 0H6.333v-1.333h1.334V12zM10 12H8.667v-1.333H10V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="router_svg__b" fill="#fff">
        <use xlinkHref="#router_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#router_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRouter
