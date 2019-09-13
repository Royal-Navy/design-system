import React, { SVGProps } from 'react'

const SvgLoop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="loop_svg__a"
        d="M8 2.667v-2L5.333 3.333 8 6V4c2.207 0 4 1.793 4 4 0 .673-.167 1.313-.467 1.867l.974.973c.52-.82.826-1.793.826-2.84A5.332 5.332 0 008 2.667zM8 12c-2.207 0-4-1.793-4-4 0-.673.167-1.313.467-1.867l-.974-.973A5.287 5.287 0 002.667 8 5.332 5.332 0 008 13.333v2l2.667-2.666L8 10v2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="loop_svg__b" fill="#fff">
        <use xlinkHref="#loop_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#loop_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLoop
