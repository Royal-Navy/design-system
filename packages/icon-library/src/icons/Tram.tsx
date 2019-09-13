import React, { SVGProps } from 'react'

const SvgTram = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tram_svg__a"
        d="M12.667 11.293V5.667c0-1.86-1.74-2.267-4.007-2.327l.507-1.007h2.166v-1H4.667v1h3.166l-.506 1.014c-2.087.06-3.994.473-3.994 2.32v5.626c0 .967.794 1.774 1.727 1.98L4 14.333v.334h1.487l1.333-1.334h2.513l1.334 1.334H12v-.334l-1-1h-.053c1.126 0 1.72-.913 1.72-2.04zM8 12.333c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1zm3.333-3H4.667V6h6.666v3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tram_svg__b" fill="#fff">
        <use xlinkHref="#tram_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tram_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTram
