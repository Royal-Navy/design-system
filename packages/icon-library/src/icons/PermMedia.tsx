import React, { SVGProps } from 'react'

const SvgPermMedia = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="perm-media_svg__a"
        d="M1.333 4H0v3.333h.007l-.007 6c0 .734.6 1.334 1.333 1.334h12v-1.334h-12V4zm13.334-1.333H9.333L8 1.333H4c-.733 0-1.327.6-1.327 1.334l-.006 8C2.667 11.4 3.267 12 4 12h10.667C15.4 12 16 11.4 16 10.667V4c0-.733-.6-1.333-1.333-1.333zM4.667 10l3-4L10 9.007 11.667 7 14 10H4.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="perm-media_svg__b" fill="#fff">
        <use xlinkHref="#perm-media_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#perm-media_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPermMedia
