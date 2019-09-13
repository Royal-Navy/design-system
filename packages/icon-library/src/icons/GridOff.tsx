import React, { SVGProps } from 'react'

const SvgGridOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="grid-off_svg__a"
        d="M5.333 2.667v.966l1.334 1.334v-2.3h2.666v2.666h-2.3l1.334 1.334h.966v.966l1.334 1.334v-2.3h2.666v2.666h-2.3l1.334 1.334h.966v.966l1.334 1.334v-10.3c0-.734-.6-1.334-1.334-1.334h-10.3l1.334 1.334h.966zm5.334 0h2.666v2.666h-2.666V2.667zM.847.847L0 1.7l1.333 1.333v10.3c0 .734.6 1.334 1.334 1.334h10.306L14.307 16l.846-.847L.847.847zm5.82 7.52l.966.966h-.966v-.966zm-4-4l.966.966h-.966v-.966zm2.666 8.966H2.667v-2.666h2.666v2.666zm0-4H2.667V6.667h2.3l.366.366v2.3zm4 4H6.667v-2.666h2.3l.366.36v2.306zm1.334 0v-.973l.973.973h-.973z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="grid-off_svg__b" fill="#fff">
        <use xlinkHref="#grid-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#grid-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGridOff
