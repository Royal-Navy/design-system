import React, { SVGProps } from 'react'

const SvgPictureAsPdf = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="picture-as-pdf_svg__a"
        d="M13.333 1.333h-8C4.6 1.333 4 1.933 4 2.667v8C4 11.4 4.6 12 5.333 12h8c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm-5.666 5c0 .554-.447 1-1 1H6v1.334H5v-4h1.667c.553 0 1 .446 1 1v.666zM11 7.667c0 .553-.447 1-1 1H8.333v-4H10c.553 0 1 .446 1 1v2zm2.667-2h-1v.666h1v1h-1v1.334h-1v-4h2v1zM6 6.333h.667v-.666H6v.666zM2.667 4H1.333v9.333c0 .734.6 1.334 1.334 1.334H12v-1.334H2.667V4zm6.666 3.667H10v-2h-.667v2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="picture-as-pdf_svg__b" fill="#fff">
        <use xlinkHref="#picture-as-pdf_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#picture-as-pdf_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPictureAsPdf
