import React, { SVGProps } from 'react'

const SvgSubway = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="subway_svg__a"
        d="M10.333 11.333a.667.667 0 110-1.333.667.667 0 010 1.333zm-4.666 0a.667.667 0 110-1.333.667.667 0 010 1.333zM4.673 6h6.667v3.333H4.673V6zm7.194-4.133c1.78.693 2.8 2.166 2.8 4.04v8.76H1.333v-8.76c0-1.874 1.02-3.347 2.8-4.04 1.2-.474 2.627-.534 3.867-.534 1.24 0 2.667.06 3.867.534zm.133 8.72V6c0-1.747-1.787-2-4-2-2 0-4 .247-4 2v4.587c0 .96.787 1.746 1.747 1.746L5 13.08v.253h1.113l1-1H9l1 1h1v-.253l-.753-.747A1.75 1.75 0 0012 10.587z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="subway_svg__b" fill="#fff">
        <use xlinkHref="#subway_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#subway_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSubway
