import React, { SVGProps } from 'react'

const SvgIso = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="iso_svg__a"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm-9 3H5V3.667h1V5h1.333v1H6v1.333H5V6H3.667V5zm9 7.667H3.333l9.334-9.334v9.334zm-1.334-1.334v-1H8v1h3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="iso_svg__b" fill="#fff">
        <use xlinkHref="#iso_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#iso_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgIso
