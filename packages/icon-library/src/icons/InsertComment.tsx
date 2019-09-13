import React, { SVGProps } from 'react'

const SvgInsertComment = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="insert-comment_svg__a"
        d="M15.111 2.667c0-.49-.4-.89-.889-.89H1.778c-.49 0-.89.4-.89.89v9.777c0 .49.4.89.89.89H12L15.111 16V2.667zm-3.555 7.11H4.444V8h7.112v1.778zm0-2.666H4.444V5.333h7.112v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="insert-comment_svg__b" fill="#fff">
        <use xlinkHref="#insert-comment_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#insert-comment_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInsertComment
