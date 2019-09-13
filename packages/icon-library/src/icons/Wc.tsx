import React, { SVGProps } from 'react'

const SvgWc = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wc_svg__a"
        d="M3.667 14.667v-5h-1V6c0-.733.6-1.333 1.333-1.333h2c.733 0 1.333.6 1.333 1.333v3.667h-1v5H3.667zm8.333 0v-4h2L12.307 5.58a1.34 1.34 0 00-1.267-.913h-.08c-.573 0-1.087.366-1.267.913L8 10.667h2v4h2zM5 4c.74 0 1.333-.593 1.333-1.333S5.74 1.333 5 1.333s-1.333.594-1.333 1.334C3.667 3.407 4.26 4 5 4zm6 0c.74 0 1.333-.593 1.333-1.333S11.74 1.333 11 1.333s-1.333.594-1.333 1.334C9.667 3.407 10.26 4 11 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wc_svg__b" fill="#fff">
        <use xlinkHref="#wc_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wc_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWc
