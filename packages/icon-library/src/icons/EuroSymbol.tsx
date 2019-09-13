import React, { SVGProps } from 'react'

const SvgEuroSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="euro-symbol_svg__a"
        d="M10 12.333A4.32 4.32 0 016.16 10H10V8.667H5.72A4.423 4.423 0 015.667 8c0-.227.02-.447.053-.667H10V6H6.16a4.328 4.328 0 016.66-1.287L14 3.533A5.97 5.97 0 0010 2a6.003 6.003 0 00-5.653 4H2v1.333h2.04a5.508 5.508 0 000 1.334H2V10h2.347c.826 2.327 3.04 4 5.653 4 1.54 0 2.94-.58 4-1.533l-1.187-1.18A4.27 4.27 0 0110 12.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="euro-symbol_svg__b" fill="#fff">
        <use xlinkHref="#euro-symbol_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#euro-symbol_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEuroSymbol
