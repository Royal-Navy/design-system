import React, { SVGProps } from 'react'

const SvgBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="block_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zM2.667 8A5.332 5.332 0 018 2.667c1.233 0 2.367.42 3.267 1.126l-7.474 7.474A5.268 5.268 0 012.667 8zM8 13.333a5.268 5.268 0 01-3.267-1.126l7.474-7.474A5.268 5.268 0 0113.333 8 5.332 5.332 0 018 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="block_svg__b" fill="#fff">
        <use xlinkHref="#block_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#block_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBlock
