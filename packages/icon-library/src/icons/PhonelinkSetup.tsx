import React, { SVGProps } from 'react'

const SvgPhonelinkSetup = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phonelink-setup_svg__a"
        d="M7.867 8.333v-.666l.733-.534c.067-.066.067-.133.067-.2L8 5.8c-.067-.067-.133-.133-.2-.067L6.933 6c-.2-.133-.4-.267-.6-.333L6.2 4.8c0-.067-.067-.133-.2-.133H4.667c-.067 0-.134.066-.2.133l-.134.867c-.2.066-.4.2-.6.333l-.866-.333c-.067 0-.134 0-.2.066L2 6.867c-.067.066 0 .133.067.2L2.8 7.6v.667l-.733.533C2 8.933 2 9 2 9.067l.667 1.133c.066.067.133.133.2.067L3.8 10c.2.133.4.267.6.333l.133.867c-.066.067.067.133.134.133H6c.067 0 .133-.066.2-.133l.133-.867c.2-.066.4-.2.6-.333l.867.333c.067 0 .133 0 .2-.066l.667-1.134c.066-.066 0-.133-.067-.2l-.733-.6zm-2.534 1C4.6 9.333 4 8.733 4 8s.6-1.333 1.333-1.333c.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333zM12.667.667H6c-.733 0-1.333.6-1.333 1.333v2H6V2.667h6.667v10.666H6V12H4.667v2c0 .733.6 1.333 1.333 1.333h6.667c.733 0 1.333-.6 1.333-1.333V2c0-.733-.6-1.333-1.333-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phonelink-setup_svg__b" fill="#fff">
        <use xlinkHref="#phonelink-setup_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phonelink-setup_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhonelinkSetup
