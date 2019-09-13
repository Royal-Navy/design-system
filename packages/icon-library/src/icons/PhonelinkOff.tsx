import React, { SVGProps } from 'react'

const SvgPhonelinkOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phonelink-off_svg__a"
        d="M14.667 4V2.667H4.547L5.88 4h8.787zM1.28 1.1l-.847.847L1.647 3.16c-.194.227-.314.52-.314.84v7.333H0v2h11.82l1.567 1.567.846-.847-11.64-11.64L1.28 1.1zm1.387 3.08l7.153 7.153H2.667V4.18zm12.666 1.153h-4c-.366 0-.666.3-.666.667v2.787L12 10.12V6.667h2.667v4.666h-1.454l2 2h.12c.367 0 .667-.3.667-.666V6c0-.367-.3-.667-.667-.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phonelink-off_svg__b" fill="#fff">
        <use xlinkHref="#phonelink-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phonelink-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhonelinkOff
