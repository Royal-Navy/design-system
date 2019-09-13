import React, { SVGProps } from 'react'

const SvgFormatColorReset = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-color-reset_svg__a"
        d="M12.444 9.778c0-2.96-4.444-8-4.444-8s-.756.862-1.644 2.07l6.07 6.072.018-.142zM3.156 2.907L2.018 4.044l2.569 2.57c-.596 1.11-1.031 2.24-1.031 3.164A4.446 4.446 0 008 14.222c1.164 0 2.213-.462 3.013-1.19l2.08 2.08 1.13-1.13L3.155 2.907z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-color-reset_svg__b" fill="#fff">
        <use xlinkHref="#format-color-reset_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-color-reset_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatColorReset
