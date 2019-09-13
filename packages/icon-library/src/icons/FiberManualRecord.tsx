import React, { SVGProps } from 'react'

const SvgFiberManualRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <circle id="fiber-manual-record_svg__a" cx={8} cy={8} r={5.333} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fiber-manual-record_svg__b" fill="#fff">
        <use xlinkHref="#fiber-manual-record_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fiber-manual-record_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFiberManualRecord
