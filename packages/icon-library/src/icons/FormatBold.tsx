import React, { SVGProps } from 'react'

const SvgFormatBold = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-bold_svg__a"
        d="M10.338 6.951c.738-.515 1.218-1.28 1.218-2.062a3.115 3.115 0 00-3.112-3.111H3.556v10.666H9.11A2.895 2.895 0 0012 9.556a2.882 2.882 0 00-1.662-2.605zm-4.56-3.395h2.444c.738 0 1.334.595 1.334 1.333S8.96 6.222 8.222 6.222H5.778V3.556zm2.889 7.11h-2.89V8h2.89C9.404 8 10 8.596 10 9.333c0 .738-.596 1.334-1.333 1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-bold_svg__b" fill="#fff">
        <use xlinkHref="#format-bold_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-bold_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatBold
