import React, { SVGProps } from 'react'

const SvgLocalHospital = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-hospital_svg__a"
        d="M12.667 2H3.333c-.733 0-1.326.6-1.326 1.333L2 12.667C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM12 9.333H9.333V12H6.667V9.333H4V6.667h2.667V4h2.666v2.667H12v2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-hospital_svg__b" fill="#fff">
        <use xlinkHref="#local-hospital_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-hospital_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalHospital
