import React, { SVGProps } from 'react'

const SvgInsertPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="insert-photo_svg__a"
        d="M14.222.889H1.778c-.49 0-.89.4-.89.889v12.444c0 .49.4.89.89.89h12.444c.49 0 .89-.4.89-.89V1.778c0-.49-.4-.89-.89-.89zM3.112 11.556l2.444-3.147 1.742 2.098L9.742 7.36l3.147 4.196H3.11z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="insert-photo_svg__b" fill="#fff">
        <use xlinkHref="#insert-photo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#insert-photo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInsertPhoto
