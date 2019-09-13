import React, { SVGProps } from 'react'

const SvgHdrStrong = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="hdr-strong_svg__a"
        d="M11.333 4c-2.206 0-4 1.793-4 4s1.794 4 4 4c2.207 0 4-1.793 4-4s-1.793-4-4-4zm-8 1.333a2.666 2.666 0 100 5.334 2.666 2.666 0 100-5.334zm0 4C2.6 9.333 2 8.733 2 8s.6-1.333 1.333-1.333c.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="hdr-strong_svg__b" fill="#fff">
        <use xlinkHref="#hdr-strong_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#hdr-strong_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHdrStrong
