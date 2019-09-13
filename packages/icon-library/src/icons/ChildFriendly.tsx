import React, { SVGProps } from 'react'

const SvgChildFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="child-friendly_svg__a"
        d="M8.667 1.333v5.334H14a5.332 5.332 0 00-5.333-5.334zm4.213 9.26c.7-.9 1.12-2.033 1.12-3.26H4.293L3.66 6H1.333v1.333h1.48s1.26 2.714 1.414 2.947A2.326 2.326 0 003 12.333a2.336 2.336 0 002.333 2.334 2.329 2.329 0 002.307-2h1.387c.16 1.133 1.133 2 2.306 2a2.336 2.336 0 002.334-2.334c0-.693-.307-1.313-.787-1.74zm-7.547 2.74c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .554-.446 1-1 1zm6 0c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .554-.446 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="child-friendly_svg__b" fill="#fff">
        <use xlinkHref="#child-friendly_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#child-friendly_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgChildFriendly
