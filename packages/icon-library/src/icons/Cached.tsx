import React, { SVGProps } from 'react'

const SvgCached = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cached_svg__a"
        d="M12.667 5.333L10 8h2c0 2.207-1.793 4-4 4a3.914 3.914 0 01-1.867-.467l-.973.974c.82.52 1.793.826 2.84.826A5.332 5.332 0 0013.333 8h2l-2.666-2.667zM4 8c0-2.207 1.793-4 4-4 .673 0 1.313.167 1.867.467l.973-.974A5.287 5.287 0 008 2.667 5.332 5.332 0 002.667 8h-2l2.666 2.667L6 8H4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cached_svg__b" fill="#fff">
        <use xlinkHref="#cached_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cached_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCached
