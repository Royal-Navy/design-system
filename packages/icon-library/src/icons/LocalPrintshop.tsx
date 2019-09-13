import React, { SVGProps } from 'react'

const SvgLocalPrintshop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-printshop_svg__a"
        d="M12.667 5.333H3.333c-1.106 0-2 .894-2 2v4H4V14h8v-2.667h2.667v-4c0-1.106-.894-2-2-2zm-2 7.334H5.333V9.333h5.334v3.334zm2-4.667A.669.669 0 0112 7.333c0-.366.3-.666.667-.666.366 0 .666.3.666.666 0 .367-.3.667-.666.667zM12 2H4v2.667h8V2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-printshop_svg__b" fill="#fff">
        <use xlinkHref="#local-printshop_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-printshop_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalPrintshop
