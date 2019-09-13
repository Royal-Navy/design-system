import React, { SVGProps } from 'react'

const SvgFindInPage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="find-in-page_svg__a"
        d="M13.333 13.06V5.333l-4-4H4c-.733 0-1.327.6-1.327 1.334l-.006 10.666c0 .734.593 1.334 1.326 1.334H12c.3 0 .567-.1.793-.267L9.84 11.447A3.335 3.335 0 118 5.334a3.335 3.335 0 013.333 3.333c0 .68-.206 1.306-.553 1.833l2.553 2.56zM6 8.667c0 1.106.893 2 2 2s2-.894 2-2c0-1.107-.893-2-2-2s-2 .893-2 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="find-in-page_svg__b" fill="#fff">
        <use xlinkHref="#find-in-page_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#find-in-page_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFindInPage
