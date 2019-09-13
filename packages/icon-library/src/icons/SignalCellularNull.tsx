import React, { SVGProps } from 'react'

const SvgSignalCellularNull = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-cellular-null_svg__a"
        d="M12.444 5.182v7.262H5.182l7.262-7.262zM14.222.89L.89 14.222h13.333V.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-cellular-null_svg__b" fill="#fff">
        <use xlinkHref="#signal-cellular-null_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-cellular-null_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalCellularNull
