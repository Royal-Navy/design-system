import React, { SVGProps } from 'react'

const SvgFiberSmartRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fiber-smart-record_svg__a"
        d="M6 13.333A5.333 5.333 0 116 2.667a5.333 5.333 0 010 10.666zM11.333 2.84a5.33 5.33 0 010 10.32v-1.393a3.994 3.994 0 000-7.534V2.84z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fiber-smart-record_svg__b" fill="#fff">
        <use xlinkHref="#fiber-smart-record_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fiber-smart-record_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFiberSmartRecord
