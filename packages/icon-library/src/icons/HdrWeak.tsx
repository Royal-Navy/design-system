import React, { SVGProps } from 'react'

const SvgHdrWeak = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="hdr-weak_svg__a"
        d="M3.333 5.333a2.666 2.666 0 100 5.334 2.666 2.666 0 100-5.334zm8-1.333c-2.206 0-4 1.793-4 4s1.794 4 4 4c2.207 0 4-1.793 4-4s-1.793-4-4-4zm0 6.667a2.666 2.666 0 110-5.334 2.666 2.666 0 110 5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="hdr-weak_svg__b" fill="#fff">
        <use xlinkHref="#hdr-weak_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#hdr-weak_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHdrWeak
