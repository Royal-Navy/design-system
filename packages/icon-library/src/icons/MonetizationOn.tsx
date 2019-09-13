import React, { SVGProps } from 'react'

const SvgMonetizationOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="monetization-on_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm.94 10.727v1.273H7.16v-1.286c-1.14-.24-2.107-.974-2.18-2.267h1.307c.066.7.546 1.247 1.766 1.247 1.307 0 1.6-.654 1.6-1.06 0-.554-.293-1.074-1.78-1.427-1.653-.4-2.786-1.08-2.786-2.447 0-1.146.926-1.893 2.073-2.14V2.667h1.78v1.3c1.24.3 1.86 1.24 1.9 2.26H9.533c-.033-.74-.426-1.247-1.48-1.247-1 0-1.6.453-1.6 1.093 0 .56.434.927 1.78 1.274 1.347.346 2.787.926 2.787 2.606-.007 1.22-.92 1.887-2.08 2.107z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="monetization-on_svg__b" fill="#fff">
        <use xlinkHref="#monetization-on_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#monetization-on_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMonetizationOn
