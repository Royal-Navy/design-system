import React, { SVGProps } from 'react'

const SvgNfc = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="nfc_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.334.6-1.334 1.334v10.666c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V2.667c0-.734-.6-1.334-1.334-1.334zm0 12H2.667V2.667h10.666v10.666zM12 4H8.667c-.734 0-1.334.6-1.334 1.333v1.52A1.32 1.32 0 006.667 8c0 .733.6 1.333 1.333 1.333S9.333 8.733 9.333 8c0-.493-.266-.92-.666-1.147v-1.52h2v5.334H5.333V5.333h1.334V4H4v8h8V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="nfc_svg__b" fill="#fff">
        <use xlinkHref="#nfc_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#nfc_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNfc
