import React, { SVGProps } from 'react'

const SvgBackspace = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="backspace_svg__a"
        d="M14.667 2h-10c-.46 0-.82.233-1.06.587L0 8l3.607 5.407c.24.353.6.593 1.06.593h10C15.4 14 16 13.4 16 12.667V3.333C16 2.6 15.4 2 14.667 2zm-2 8.393l-.94.94L9.333 8.94 6.94 11.333l-.94-.94L8.393 8 6 5.607l.94-.94L9.333 7.06l2.394-2.393.94.94L10.273 8l2.394 2.393z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="backspace_svg__b" fill="#fff">
        <use xlinkHref="#backspace_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#backspace_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBackspace
