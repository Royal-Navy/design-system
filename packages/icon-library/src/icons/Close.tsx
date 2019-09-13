import React, { SVGProps } from 'react'

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="close_svg__a"
        d="M12.916 4.027l-.943-.943L8 7.058 4.027 3.084l-.943.943L7.058 8l-3.974 3.973.943.943L8 8.942l3.973 3.974.943-.943L8.942 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="close_svg__b" fill="#fff">
        <use xlinkHref="#close_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#close_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgClose
