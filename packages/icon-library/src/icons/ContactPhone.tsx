import React, { SVGProps } from 'react'

const SvgContactPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="contact-phone_svg__a"
        d="M14.667 2H1.333C.6 2 0 2.6 0 3.333v9.334C0 13.4.6 14 1.333 14h13.334c.733 0 1.326-.6 1.326-1.333L16 3.333C16 2.6 15.4 2 14.667 2zM5.333 4c1.107 0 2 .893 2 2s-.893 2-2 2c-1.106 0-2-.893-2-2s.894-2 2-2zm4 8h-8v-.667c0-1.333 2.667-2.066 4-2.066 1.334 0 4 .733 4 2.066V12zM11.9 9.333h1.093L14 10.667l-1.327 1.326A5.008 5.008 0 0110.667 8c0-.46.066-.907.186-1.333.3-1.08.947-2.007 1.82-2.66L14 5.333l-1.007 1.334H11.9c-.147.42-.233.866-.233 1.333 0 .467.086.913.233 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="contact-phone_svg__b" fill="#fff">
        <use xlinkHref="#contact-phone_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#contact-phone_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgContactPhone
