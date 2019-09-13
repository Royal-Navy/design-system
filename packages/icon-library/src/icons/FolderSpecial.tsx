import React, { SVGProps } from 'react'

const SvgFolderSpecial = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="folder-special_svg__a"
        d="M13.333 4H8L6.667 2.667h-4c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V5.333c0-.733-.6-1.333-1.334-1.333zm-1.373 7.333L10 10.187l-1.96 1.146.52-2.22L6.833 7.62l2.274-.193L10 5.333l.893 2.094 2.274.193-1.727 1.493.52 2.22z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="folder-special_svg__b" fill="#fff">
        <use xlinkHref="#folder-special_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#folder-special_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFolderSpecial
