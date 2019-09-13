import React, { SVGProps } from 'react'

const SvgHdrOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="hdr-off_svg__a"
        d="M11.667 10V8.667h.733L13 10h1l-.6-1.4c.333-.133.6-.533.6-.933V7c0-.533-.467-1-1-1h-2.333v3.267L11.4 10h.267zm0-3H13v.667h-1.333V7zm-3 0v.267l1 1V7c0-.533-.467-1-1-1H7.4l1 1h.267zm-2.334-.667L1.667 1.667l-.734.666L4.6 6h-.267v1.333H3V6H2v4h1V8.333h1.333V10h1V6.733l1 1V10H8.6l5.067 5.067.733-.734-8.067-8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="hdr-off_svg__b" fill="#fff">
        <use xlinkHref="#hdr-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#hdr-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHdrOff
