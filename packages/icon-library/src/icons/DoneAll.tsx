import React, { SVGProps } from 'react'

const SvgDoneAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="done-all_svg__a"
        d="M12 4.667l-.94-.94-4.227 4.226.94.94L12 4.667zm2.827-.94L7.773 10.78 4.987 8l-.94.94 3.726 3.727 8-8-.946-.94zM.273 8.94L4 12.667l.94-.94L1.22 8l-.947.94z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="done-all_svg__b" fill="#fff">
        <use xlinkHref="#done-all_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#done-all_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDoneAll
