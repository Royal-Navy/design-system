import React, { SVGProps } from 'react'

const SvgDoNotDisturbAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="do-not-disturb-alt_svg__a"
        d="M8 1.333c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667 6.667-3 6.667-6.667-3-6.667-6.667-6.667zM2.667 8c0-2.933 2.4-5.333 5.333-5.333 1.2 0 2.333.4 3.267 1.133L3.8 11.267A5.254 5.254 0 012.667 8zM8 13.333c-1.2 0-2.333-.4-3.267-1.133L12.2 4.733A5.254 5.254 0 0113.333 8c0 2.933-2.4 5.333-5.333 5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="do-not-disturb-alt_svg__b" fill="#fff">
        <use xlinkHref="#do-not-disturb-alt_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#do-not-disturb-alt_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDoNotDisturbAlt
