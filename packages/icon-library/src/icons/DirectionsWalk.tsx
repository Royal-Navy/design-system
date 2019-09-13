import React, { SVGProps } from 'react'

const SvgDirectionsWalk = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="directions-walk_svg__a"
        d="M9 3.667c.733 0 1.333-.6 1.333-1.334C10.333 1.6 9.733 1 9 1s-1.333.6-1.333 1.333c0 .734.6 1.334 1.333 1.334zM6.533 5.933l-1.866 9.4h1.4L7.267 10l1.4 1.333v4H10v-5L8.6 9 9 7c.867 1 2.2 1.667 3.667 1.667V7.333c-1.267 0-2.334-.666-2.867-1.6l-.667-1.066C8.867 4.267 8.467 4 8 4c-.2 0-.333.067-.533.067L4 5.533v3.134h1.333V6.4l1.2-.467z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="directions-walk_svg__b" fill="#fff">
        <use xlinkHref="#directions-walk_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#directions-walk_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDirectionsWalk
