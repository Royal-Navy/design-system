import React, { SVGProps } from 'react'

const SvgImportExport = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="import-export_svg__a"
        d="M6 2L3.333 4.66h2v4.673h1.334V4.66h2L6 2zm4.667 9.34V6.667H9.333v4.673h-2L10 14l2.667-2.66h-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="import-export_svg__b" fill="#fff">
        <use xlinkHref="#import-export_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#import-export_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgImportExport
