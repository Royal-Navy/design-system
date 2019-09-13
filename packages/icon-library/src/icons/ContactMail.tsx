import React, { SVGProps } from 'react'

const SvgContactMail = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="contact-mail_svg__a"
        d="M14 5.333v-.666L12 6l-2-1.333v.666l2 1.334 2-1.334zM14.667 2H1.333C.6 2 0 2.6 0 3.333v9.334C0 13.4.6 14 1.333 14h13.334c.733 0 1.326-.6 1.326-1.333L16 3.333C16 2.6 15.4 2 14.667 2zM5.333 4c1.107 0 2 .893 2 2s-.893 2-2 2c-1.106 0-2-.893-2-2s.894-2 2-2zm4 8h-8v-.667c0-1.333 2.667-2.066 4-2.066 1.334 0 4 .733 4 2.066V12zm5.334-4H9.333V4h5.334v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="contact-mail_svg__b" fill="#fff">
        <use xlinkHref="#contact-mail_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#contact-mail_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgContactMail
