import React, { SVGProps } from 'react'

const SvgRestorePage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="restore-page_svg__a"
        d="M9.333 1.333H4c-.733 0-1.327.6-1.327 1.334l-.006 10.666c0 .734.593 1.334 1.326 1.334H12c.733 0 1.333-.6 1.333-1.334v-8l-4-4zM8 12a3.336 3.336 0 01-3.053-2h1.14c.42.6 1.12 1 1.913 1a2.336 2.336 0 002.333-2.333A2.336 2.336 0 008 6.333c-.9 0-1.68.52-2.067 1.267L7 8.667H4.333V6l.867.867A3.324 3.324 0 018 5.333 3.335 3.335 0 018 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="restore-page_svg__b" fill="#fff">
        <use xlinkHref="#restore-page_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#restore-page_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRestorePage
