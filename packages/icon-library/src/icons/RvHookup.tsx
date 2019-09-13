import React, { SVGProps } from 'react'

const SvgRvHookup = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rv-hookup_svg__a"
        d="M13.333 11.333v-4C13.333 6.6 12.733 6 12 6H4.667V4.667l-2 2 2 2V7.333h2.666v2H2.667v2c0 .734.6 1.334 1.333 1.334h1.333c0 1.106.894 2 2 2 1.107 0 2-.894 2-2h5.334v-1.334h-1.334zm-6 2a.669.669 0 01-.666-.666c0-.367.3-.667.666-.667.367 0 .667.3.667.667 0 .366-.3.666-.667.666zm4.667-4H9.333v-2H12v2zm-.667-8v1.334H6V4h5.333v1.333l2-2-2-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rv-hookup_svg__b" fill="#fff">
        <use xlinkHref="#rv-hookup_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rv-hookup_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRvHookup
