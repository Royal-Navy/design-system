import React, { SVGProps } from 'react'

const SvgFontDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="font-download_svg__a"
        d="M6.62 9h2.76L8 5.32 6.62 9zm6.713-7.667H2.667c-.734 0-1.334.6-1.334 1.334v10.666c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V2.667c0-.734-.6-1.334-1.334-1.334zm-2.7 11l-.76-2h-3.76l-.746 2H3.973L7.38 3.667h1.24l3.407 8.666h-1.394z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="font-download_svg__b" fill="#fff">
        <use xlinkHref="#font-download_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#font-download_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFontDownload
