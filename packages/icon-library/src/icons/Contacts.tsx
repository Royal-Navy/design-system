import React, { SVGProps } from 'react'

const SvgContacts = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="contacts_svg__a"
        d="M13.333 0H2.667v1.333h10.666V0zM2.667 16h10.666v-1.333H2.667V16zM13.333 2.667H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zM8 4.5c.827 0 1.5.673 1.5 1.5S8.827 7.5 8 7.5 6.5 6.827 6.5 6 7.173 4.5 8 4.5zm3.333 6.833H4.667v-1c0-1.113 2.22-1.666 3.333-1.666s3.333.553 3.333 1.666v1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="contacts_svg__b" fill="#fff">
        <use xlinkHref="#contacts_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#contacts_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgContacts
