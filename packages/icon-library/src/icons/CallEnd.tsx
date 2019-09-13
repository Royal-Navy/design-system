import React, { SVGProps } from 'react'

const SvgCallEnd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-end_svg__a"
        d="M8 6a9.94 9.94 0 00-3.067.48v2.067c0 .26-.153.493-.373.6a7.674 7.674 0 00-1.773 1.233.655.655 0 01-.467.187.665.665 0 01-.473-.194L.193 8.72A.638.638 0 010 8.253c0-.186.073-.353.193-.473A11.314 11.314 0 018 4.667c3.027 0 5.773 1.186 7.807 3.113.12.12.193.287.193.473a.665.665 0 01-.193.474l-1.654 1.653a.665.665 0 01-.473.193.684.684 0 01-.467-.186 7.514 7.514 0 00-1.78-1.234.664.664 0 01-.373-.6V6.487A9.677 9.677 0 008 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-end_svg__b" fill="#fff">
        <use xlinkHref="#call-end_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-end_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallEnd
