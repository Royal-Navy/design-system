import React, { SVGProps } from 'react'

const SvgWrapText = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wrap-text_svg__a"
        d="M14.222 2.667H1.778v1.777h12.444V2.667zM1.778 13.333h3.555v-1.777H1.778v1.777zM12 7.111H1.778V8.89h10.444c.738 0 1.334.595 1.334 1.333s-.596 1.334-1.334 1.334H9.778V9.778L7.11 12.444l2.667 2.667v-1.778H12a3.115 3.115 0 003.111-3.11A3.115 3.115 0 0012 7.11z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wrap-text_svg__b" fill="#fff">
        <use xlinkHref="#wrap-text_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wrap-text_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWrapText
