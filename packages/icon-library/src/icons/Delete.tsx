import React, { SVGProps } from 'react'

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="delete_svg__a"
        d="M4 12.667C4 13.4 4.6 14 5.333 14h5.334C11.4 14 12 13.4 12 12.667v-8H4v8zm8.667-10h-2.334L9.667 2H6.333l-.666.667H3.333V4h9.334V2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="delete_svg__b" fill="#fff">
        <use xlinkHref="#delete_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#delete_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDelete
