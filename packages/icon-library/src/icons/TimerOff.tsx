import React, { SVGProps } from 'react'

const SvgTimerOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="timer-off_svg__a"
        d="M12.693 3.033l-.946.947A6.008 6.008 0 004.7 3.653l.973.974a4.663 4.663 0 016.367 6.367l.967.966a5.975 5.975 0 00-.32-7.033l.946-.947-.94-.947zM10 .667H6V2h4V.667zM7.333 6.293l1.334 1.334V5.333H7.333v.96zm-5.32-3.626l-.846.846L3 5.353C2.367 6.3 2 7.44 2 8.667c0 3.313 2.68 6 6 6a5.975 5.975 0 003.32-1l1.667 1.666.846-.846-5.14-5.14-6.68-6.68zM8 13.333A4.663 4.663 0 013.967 6.32l6.373 6.373a4.578 4.578 0 01-2.34.64z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="timer-off_svg__b" fill="#fff">
        <use xlinkHref="#timer-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#timer-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTimerOff
