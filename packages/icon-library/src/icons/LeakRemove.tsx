import React, { SVGProps } from 'react'

const SvgLeakRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="leak-remove_svg__a"
        d="M6.667 2H5.333c0 .247-.026.48-.08.707l1.06 1.06c.227-.54.354-1.14.354-1.767zM2 2.847L3.893 4.74A3.307 3.307 0 012 5.333v1.334c1.073 0 2.06-.367 2.847-.974l.953.954A5.994 5.994 0 012 8v1.333c1.807 0 3.46-.66 4.74-1.746l1.667 1.666A7.363 7.363 0 006.667 14H8c0-1.44.507-2.76 1.353-3.793l.954.953A4.614 4.614 0 009.333 14h1.334c0-.707.22-1.353.593-1.893L13.153 14l.847-.847L2.847 2 2 2.847zM9.333 2H8c0 1-.247 1.94-.68 2.773l.973.974A7.284 7.284 0 009.333 2zm3.96 8.747c.227-.054.46-.08.707-.08V9.333c-.627 0-1.227.127-1.773.347l1.066 1.067zm-3.04-3.04l.974.973A5.986 5.986 0 0114 8V6.667a7.284 7.284 0 00-3.747 1.04z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="leak-remove_svg__b" fill="#fff">
        <use xlinkHref="#leak-remove_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#leak-remove_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLeakRemove
