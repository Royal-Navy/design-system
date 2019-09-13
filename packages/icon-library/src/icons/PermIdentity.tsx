import React, { SVGProps } from 'react'

const SvgPermIdentity = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="perm-identity_svg__a"
        d="M8 3.933a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zm0 6c1.98 0 4.067.974 4.067 1.4v.734H3.933v-.734c0-.426 2.087-1.4 4.067-1.4zm0-7.266A2.666 2.666 0 108 8a2.666 2.666 0 100-5.333zm0 6c-1.78 0-5.333.893-5.333 2.666v2h10.666v-2C13.333 9.56 9.78 8.667 8 8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="perm-identity_svg__b" fill="#fff">
        <use xlinkHref="#perm-identity_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#perm-identity_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPermIdentity
