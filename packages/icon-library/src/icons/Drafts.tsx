import React, { SVGProps } from 'react'

const SvgDrafts = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="drafts_svg__a"
        d="M14.66 5.333c0-.48-.247-.9-.627-1.133L8 .667 1.967 4.2c-.38.233-.634.653-.634 1.133V12c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333l-.007-6.667zM8 8.667l-5.507-3.44L8 2l5.507 3.227L8 8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="drafts_svg__b" fill="#fff">
        <use xlinkHref="#drafts_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#drafts_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDrafts
