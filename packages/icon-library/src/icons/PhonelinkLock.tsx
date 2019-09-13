import React, { SVGProps } from 'react'

const SvgPhonelinkLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phonelink-lock_svg__a"
        d="M12.667.667H6c-.733 0-1.333.6-1.333 1.333v2H6V2.667h6.667v10.666H6V12H4.667v2c0 .733.6 1.333 1.333 1.333h6.667c.733 0 1.333-.6 1.333-1.333V2c0-.733-.6-1.333-1.333-1.333zM7.2 7.333v-1c0-.933-.933-1.666-1.867-1.666-.933 0-1.866.733-1.866 1.666v1c-.4 0-.8.4-.8.8v2.334c0 .466.4.866.8.866h3.666c.467 0 .867-.4.867-.8V8.2c0-.467-.4-.867-.8-.867zm-.867 0h-2v-1c0-.533.467-.866 1-.866.534 0 1 .333 1 .866v1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phonelink-lock_svg__b" fill="#fff">
        <use xlinkHref="#phonelink-lock_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phonelink-lock_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhonelinkLock
