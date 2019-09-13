import React, { SVGProps } from 'react'

const SvgInsertEmoticon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="insert-emoticon_svg__a"
        d="M5.333 7.111c.49 0 .89-.4.89-.889s-.4-.889-.89-.889c-.489 0-.889.4-.889.89 0 .488.4.888.89.888zm5.334 0c.489 0 .889-.4.889-.889s-.4-.889-.89-.889c-.488 0-.888.4-.888.89 0 .488.4.888.889.888zM8 12a4.002 4.002 0 003.893-3.111H4.107A4.002 4.002 0 008 12zM8 .889A7.103 7.103 0 00.889 8 7.103 7.103 0 008 15.111 7.103 7.103 0 0015.111 8 7.11 7.11 0 008 .889zm0 12.889A5.778 5.778 0 118 2.223a5.778 5.778 0 010 11.555z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="insert-emoticon_svg__b" fill="#fff">
        <use xlinkHref="#insert-emoticon_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#insert-emoticon_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInsertEmoticon
