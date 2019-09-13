import React, { SVGProps } from 'react'

const SvgUnfoldLess = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="unfold-less_svg__a"
        d="M4.942 12.836l.942.942L8 11.662l2.116 2.116.942-.942L8 9.778l-3.058 3.058zm6.116-9.672l-.942-.942L8 4.338 5.884 2.222l-.942.942L8 6.222l3.058-3.058z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="unfold-less_svg__b" fill="#fff">
        <use xlinkHref="#unfold-less_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#unfold-less_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgUnfoldLess
