import React, { SVGProps } from 'react'

const SvgTimeToLeave = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="time-to-leave_svg__a"
        d="M12.613 3.34a.996.996 0 00-.946-.673H4.333c-.44 0-.806.28-.946.673L2 7.333v5.334c0 .366.3.666.667.666h.666c.367 0 .667-.3.667-.666V12h8v.667c0 .366.3.666.667.666h.666c.367 0 .667-.3.667-.666V7.333L12.613 3.34zM4.333 10c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .553-.446 1-1 1zm7.334 0c-.554 0-1-.447-1-1 0-.553.446-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1zM3.333 6.667l1-3h7.334l1 3H3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="time-to-leave_svg__b" fill="#fff">
        <use xlinkHref="#time-to-leave_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#time-to-leave_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTimeToLeave
