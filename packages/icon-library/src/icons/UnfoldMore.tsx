import React, { SVGProps } from 'react'

const SvgUnfoldMore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="unfold-more_svg__a"
        d="M8 3.662l2.116 2.116.942-.942L8 1.778 4.942 4.836l.942.942L8 3.662zm0 8.676l-2.116-2.116-.942.942L8 14.222l3.058-3.058-.942-.942L8 12.338z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="unfold-more_svg__b" fill="#fff">
        <use xlinkHref="#unfold-more_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#unfold-more_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgUnfoldMore
