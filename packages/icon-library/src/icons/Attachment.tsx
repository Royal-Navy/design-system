import React, { SVGProps } from 'react'

const SvgAttachment = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="attachment_svg__a"
        d="M13.333 4.444H3.556A3.566 3.566 0 000 8c0 1.956 1.6 3.556 3.556 3.556h8.888v-.89H3.556C2.044 10.667.889 9.512.889 8s1.155-2.667 2.667-2.667h9.777c.978 0 1.778.8 1.778 1.778s-.8 1.778-1.778 1.778h-8c-.533 0-.889-.356-.889-.889s.356-.889.89-.889h7.11v-.889h-7.11c-.978 0-1.778.8-1.778 1.778s.8 1.778 1.777 1.778h8C14.844 9.778 16 8.622 16 7.11s-1.156-2.667-2.667-2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="attachment_svg__b" fill="#fff">
        <use xlinkHref="#attachment_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#attachment_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAttachment
