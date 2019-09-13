import React, { SVGProps } from 'react'

const SvgModeComment = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="mode-comment_svg__a"
        d="M15.111 2.667c0-.49-.4-.89-.889-.89H1.778c-.49 0-.89.4-.89.89v9.777c0 .49.4.89.89.89H12L15.111 16V2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mode-comment_svg__b" fill="#fff">
        <use xlinkHref="#mode-comment_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#mode-comment_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgModeComment
