import React, { SVGProps } from 'react'

const SvgLiveHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="live-help_svg__a"
        d="M12.667 1.333H3.333c-.74 0-1.333.6-1.333 1.334V12c0 .733.593 1.333 1.333 1.333H6l2 2 2-2h2.667c.733 0 1.333-.6 1.333-1.333V2.667c0-.734-.6-1.334-1.333-1.334zM8.667 12H7.333v-1.333h1.334V12zm1.38-5.167l-.6.614c-.48.486-.78.886-.78 1.886H7.333V9c0-.733.3-1.4.78-1.887l.827-.84c.247-.24.393-.573.393-.94C9.333 4.6 8.733 4 8 4s-1.333.6-1.333 1.333H5.333a2.666 2.666 0 115.334 0c0 .587-.24 1.12-.62 1.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="live-help_svg__b" fill="#fff">
        <use xlinkHref="#live-help_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#live-help_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLiveHelp
