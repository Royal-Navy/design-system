import React, { SVGProps } from 'react'

const SvgCreateNewFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="create-new-folder_svg__a"
        d="M13.333 4H8L6.667 2.667h-4c-.74 0-1.327.593-1.327 1.333l-.007 8c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V5.333c0-.74-.594-1.333-1.334-1.333zm-.666 5.333h-2v2H9.333v-2h-2V8h2V6h1.334v2h2v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="create-new-folder_svg__b" fill="#fff">
        <use xlinkHref="#create-new-folder_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#create-new-folder_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCreateNewFolder
