import React, { SVGProps } from 'react'

const SvgImageAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="image-aspect-ratio_svg__a"
        d="M10.667 6.667H9.333V8h1.334V6.667zm0 2.666H9.333v1.334h1.334V9.333zM5.333 6.667H4V8h1.333V6.667zm2.667 0H6.667V8H8V6.667zm5.333-4H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zm0 9.333H2.667V4h10.666v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="image-aspect-ratio_svg__b" fill="#fff">
        <use xlinkHref="#image-aspect-ratio_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#image-aspect-ratio_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgImageAspectRatio
