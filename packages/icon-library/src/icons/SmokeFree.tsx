import React, { SVGProps } from 'react'

const SvgSmokeFree = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="smoke-free_svg__a"
        d="M1.333 4l4.66 4.667h-4.66v2h6.66l4.667 4.666.84-.833L2.167 3.167 1.333 4zm12.334 4.667h1v2h-1v-2zm-1.667 0h1v2h-1v-2zm.567-5.414c.413-.406.666-.966.666-1.586h-1c0 .68-.553 1.233-1.233 1.233v1c1.493 0 2.667 1.22 2.667 2.713V8h1V6.613a3.705 3.705 0 00-2.1-3.36zM9.667 5.8h1.02c.7 0 1.313.493 1.313 1.367V8h1V6.94c0-1.2-1.067-2.107-2.313-2.107h-1.02c-.68 0-1.234-.653-1.234-1.333 0-.68.554-1.167 1.234-1.167v-1a2.233 2.233 0 000 4.467zm1.666 4.82V8.667H9.38l1.953 1.953z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="smoke-free_svg__b" fill="#fff">
        <use xlinkHref="#smoke-free_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#smoke-free_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSmokeFree
