import React, { SVGProps } from 'react'

const SvgScreenLockRotation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="screen-lock-rotation_svg__a"
        d="M15.5 8.513L13.787 6.8l-.94.94 1.48 1.48-3.774 3.773-7.546-7.546L6.78 1.673l1.4 1.4.94-.94L7.487.5a.994.994 0 00-1.414 0l-4.24 4.24a.994.994 0 000 1.413l8.014 8.014a.994.994 0 001.413 0l4.24-4.24a.994.994 0 000-1.414zm-9.853 5.14A6.991 6.991 0 011.667 8h-1c.34 4.107 3.773 7.333 7.966 7.333l.44-.02-2.54-2.546-.886.886zM10.667 6H14c.367 0 .667-.3.667-.667V2.667c0-.367-.3-.667-.667-.667v-.333a1.667 1.667 0 00-3.333 0V2C10.3 2 10 2.3 10 2.667v2.666c0 .367.3.667.667.667zm.533-4.333a1.132 1.132 0 112.267 0V2H11.2v-.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="screen-lock-rotation_svg__b" fill="#fff">
        <use xlinkHref="#screen-lock-rotation_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#screen-lock-rotation_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgScreenLockRotation
