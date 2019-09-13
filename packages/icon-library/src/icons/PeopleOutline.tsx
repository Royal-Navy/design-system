import React, { SVGProps } from 'react'

const SvgPeopleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="people-outline_svg__a"
        d="M11 8.667c-.8 0-2.047.226-3 .666-.953-.446-2.2-.666-3-.666-1.447 0-4.333.72-4.333 2.166v1.834h14.666v-1.834c0-1.446-2.886-2.166-4.333-2.166zm-2.667 3H1.667v-.834c0-.36 1.706-1.166 3.333-1.166 1.627 0 3.333.806 3.333 1.166v.834zm6 0h-5v-.834c0-.306-.133-.573-.346-.813A6.432 6.432 0 0111 9.667c1.627 0 3.333.806 3.333 1.166v.834zM5 8a2.336 2.336 0 002.333-2.333A2.336 2.336 0 005 3.333a2.336 2.336 0 00-2.333 2.334A2.336 2.336 0 005 8zm0-3.667c.733 0 1.333.6 1.333 1.334C6.333 6.4 5.733 7 5 7s-1.333-.6-1.333-1.333c0-.734.6-1.334 1.333-1.334zM11 8a2.336 2.336 0 002.333-2.333A2.336 2.336 0 0011 3.333a2.336 2.336 0 00-2.333 2.334A2.336 2.336 0 0011 8zm0-3.667c.733 0 1.333.6 1.333 1.334C12.333 6.4 11.733 7 11 7s-1.333-.6-1.333-1.333c0-.734.6-1.334 1.333-1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="people-outline_svg__b" fill="#fff">
        <use xlinkHref="#people-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#people-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPeopleOutline
