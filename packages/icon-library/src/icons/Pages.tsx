import React, { SVGProps } from 'react'

const SvgPages = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pages_svg__a"
        d="M4.889 8.889H1.778v4.444c0 .49.4.89.889.89H7.11V11.11L4 12l.889-3.111zM1.778 2.667V7.11h3.11L4 4l3.111.889V1.778H2.667c-.49 0-.89.4-.89.889zm11.555-.89H8.89V4.89L12 4l-.889 3.111h3.111V2.667c0-.49-.4-.89-.889-.89zM12 12l-3.111-.889v3.111h4.444c.49 0 .89-.4.89-.889V8.89H11.11L12 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pages_svg__b" fill="#fff">
        <use xlinkHref="#pages_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pages_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPages
