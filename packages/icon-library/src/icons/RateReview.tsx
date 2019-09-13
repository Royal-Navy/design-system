import React, { SVGProps } from 'react'

const SvgRateReview = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rate-review_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.327.6-1.327 1.334l-.007 12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zM4 9.333V7.687L8.587 3.1a.33.33 0 01.473 0l1.18 1.18a.33.33 0 010 .473l-4.593 4.58H4zm8 0H7L8.333 8H12v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rate-review_svg__b" fill="#fff">
        <use xlinkHref="#rate-review_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rate-review_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRateReview
