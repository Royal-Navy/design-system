import React, { SVGProps } from 'react'

const SvgFindReplace = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="find-replace_svg__a"
        d="M7.333 4c.92 0 1.754.373 2.36.973L8 6.667h4v-4l-1.367 1.366A4.663 4.663 0 002.72 6.666h1.347A3.334 3.334 0 017.333 4zm3.76 6.093c.44-.6.747-1.313.854-2.093H10.6a3.334 3.334 0 01-3.267 2.667c-.92 0-1.753-.374-2.36-.974L6.667 8h-4v4l1.366-1.367A4.65 4.65 0 007.333 12c1.034 0 1.987-.34 2.76-.907l3.24 3.234.994-.994-3.234-3.24z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="find-replace_svg__b" fill="#fff">
        <use xlinkHref="#find-replace_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#find-replace_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFindReplace
