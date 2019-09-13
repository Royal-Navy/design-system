import React, { SVGProps } from 'react'

const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="open-in-browser_svg__a"
        d="M12.667 2.667H3.333C2.593 2.667 2 3.267 2 4v8c0 .733.593 1.333 1.333 1.333H6V12H3.333V5.333h9.334V12H10v1.333h2.667c.733 0 1.333-.6 1.333-1.333V4c0-.733-.593-1.333-1.333-1.333zM8 6.667L5.333 9.333h2v4h1.334v-4h2L8 6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="open-in-browser_svg__b" fill="#fff">
        <use xlinkHref="#open-in-browser_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#open-in-browser_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgOpenInBrowser
