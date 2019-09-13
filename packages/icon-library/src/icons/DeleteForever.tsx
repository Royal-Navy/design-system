import React, { SVGProps } from 'react'

const SvgDeleteForever = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="delete-forever_svg__a"
        d="M4 12.667C4 13.4 4.6 14 5.333 14h5.334C11.4 14 12 13.4 12 12.667v-8H4v8zM5.64 7.92l.94-.94L8 8.393 9.413 6.98l.94.94L8.94 9.333l1.413 1.414-.94.94L8 10.273l-1.413 1.414-.94-.94L7.06 9.333 5.64 7.92zm4.693-5.253L9.667 2H6.333l-.666.667H3.333V4h9.334V2.667h-2.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="delete-forever_svg__b" fill="#fff">
        <use xlinkHref="#delete-forever_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#delete-forever_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDeleteForever
