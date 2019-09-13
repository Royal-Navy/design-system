import React, { SVGProps } from 'react'

const SvgPoll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="poll_svg__a"
        d="M14.222.889H1.778c-.49 0-.89.4-.89.889v12.444c0 .49.4.89.89.89h12.444c.49 0 .89-.4.89-.89V1.778c0-.49-.4-.89-.89-.89zm-8 10.667H4.444V7.11h1.778v4.445zm2.667 0H7.11V4.444H8.89v7.112zm2.667 0H9.778V8h1.778v3.556z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="poll_svg__b" fill="#fff">
        <use xlinkHref="#poll_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#poll_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPoll
