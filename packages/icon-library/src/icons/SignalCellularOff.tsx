import React, { SVGProps } from 'react'

const SvgSignalCellularOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-cellular-off_svg__a"
        d="M13.778.889L8.276 6.39l5.502 5.502V.89zM3.182 2.996l-.853.853 4.249 4.24-5.69 5.689h11.379l.222.222 1.333 1.333.845-.844L3.182 2.996z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-cellular-off_svg__b" fill="#fff">
        <use xlinkHref="#signal-cellular-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-cellular-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalCellularOff
