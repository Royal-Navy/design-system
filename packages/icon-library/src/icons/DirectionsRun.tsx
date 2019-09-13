import React, { SVGProps } from 'react'

const SvgDirectionsRun = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="directions-run_svg__a"
        d="M8.993 3.653c.734 0 1.334-.6 1.334-1.333S9.727.987 8.993.987c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333zm-2.4 9.267l.667-2.933 1.4 1.333v4h1.333v-5l-1.4-1.333.4-2c.867 1 2.2 1.666 3.667 1.666V7.32c-1.267 0-2.333-.667-2.867-1.6l-.666-1.067c-.267-.4-.667-.666-1.134-.666-.2 0-.333.066-.533.066L3.993 5.52v3.133h1.334V6.387l1.2-.467-1.067 5.4-3.267-.667-.266 1.334 4.666.933z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="directions-run_svg__b" fill="#fff">
        <use xlinkHref="#directions-run_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#directions-run_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDirectionsRun
