import React, { SVGProps } from 'react'

const SvgHdrOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="hdr-on_svg__a"
        d="M14 7.667V7c0-.533-.467-1-1-1h-2.333v4h1V8.667h.733L13 10h1l-.6-1.4c.333-.2.6-.533.6-.933zm-1 0h-1.333V7H13v.667zm-8.667-.334H3V6H2v4h1V8.333h1.333V10h1V6h-1v1.333zM8.667 6H6.333v4h2.334c.533 0 1-.467 1-1V7c0-.533-.467-1-1-1zm0 3H7.333V7h1.334v2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="hdr-on_svg__b" fill="#fff">
        <use xlinkHref="#hdr-on_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#hdr-on_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHdrOn
