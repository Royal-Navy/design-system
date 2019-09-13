import React, { SVGProps } from 'react'

const SvgSdCard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sd-card_svg__a"
        d="M12 1.333H6.667l-3.987 4-.013 8c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V2.667c0-.734-.6-1.334-1.333-1.334zm-4 4H6.667V2.667H8v2.666zm2 0H8.667V2.667H10v2.666zm2 0h-1.333V2.667H12v2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sd-card_svg__b" fill="#fff">
        <use xlinkHref="#sd-card_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sd-card_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSdCard
