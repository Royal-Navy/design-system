import React, { SVGProps } from 'react'

const SvgStopScreenShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="stop-screen-share_svg__a"
        d="M14.147 12.013l1.333 1.334H16v-1.334h-1.853zm.513-1.333l.007-6.667c0-.74-.6-1.333-1.334-1.333h-8.52L8.3 6.167c.12-.027.24-.047.367-.067V4.68l2.666 2.487-1.053.98 3.693 3.693c.407-.22.687-.66.687-1.16zM1.593 1.153L.74 2l1.027 1.027c-.267.24-.434.593-.434.986v6.667c0 .733.594 1.333 1.334 1.333H0v1.334h12.087l1.806 1.806.847-.846L1.593 1.153zm3.074 8.86c.206-.986.613-1.966 1.38-2.706l1.06 1.06c-1.027.253-1.8.786-2.44 1.646z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="stop-screen-share_svg__b" fill="#fff">
        <use xlinkHref="#stop-screen-share_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#stop-screen-share_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStopScreenShare
