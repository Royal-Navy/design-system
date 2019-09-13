import React, { SVGProps } from 'react'

const SvgPanTool = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pan-tool_svg__a"
        d="M15.333 3.667v9.666c0 1.467-1.2 2.667-2.666 2.667H7.8c-.72 0-1.4-.287-1.9-.793L.667 9.887s.84-.82.866-.834a.815.815 0 01.927-.087c.027.007 2.873 1.64 2.873 1.64v-7.94c0-.553.447-1 1-1 .554 0 1 .447 1 1v4.667H8V1c0-.553.447-1 1-1 .553 0 1 .447 1 1v6.333h.667V1.667c0-.554.446-1 1-1 .553 0 1 .446 1 1v5.666h.666V3.667c0-.554.447-1 1-1 .554 0 1 .446 1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pan-tool_svg__b" fill="#fff">
        <use xlinkHref="#pan-tool_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pan-tool_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPanTool
