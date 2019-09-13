import React, { SVGProps } from 'react'

const SvgStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="style_svg__a"
        d="M1.687 13.1l.893.373v-6.02L.96 11.36c-.273.68.053 1.46.727 1.74zm13-2.467l-3.307-7.98a1.342 1.342 0 00-1.207-.82c-.173 0-.353.027-.526.1L4.733 3.967a1.333 1.333 0 00-.72 1.733l3.307 7.98a1.332 1.332 0 001.733.72l4.907-2.033a1.33 1.33 0 00.727-1.734zm-9.434-4.8a.669.669 0 01-.666-.666c0-.367.3-.667.666-.667.367 0 .667.3.667.667 0 .366-.3.666-.667.666zM3.92 13.167c0 .733.6 1.333 1.333 1.333h.967l-2.3-5.56v4.227z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="style_svg__b" fill="#fff">
        <use xlinkHref="#style_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#style_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStyle
