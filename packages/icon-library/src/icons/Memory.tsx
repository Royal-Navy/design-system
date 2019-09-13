import React, { SVGProps } from 'react'

const SvgMemory = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="memory_svg__a"
        d="M10 6H6v4h4V6zM8.667 8.667H7.333V7.333h1.334v1.334zM14 7.333V6h-1.333V4.667c0-.734-.6-1.334-1.334-1.334H10V2H8.667v1.333H7.333V2H6v1.333H4.667c-.734 0-1.334.6-1.334 1.334V6H2v1.333h1.333v1.334H2V10h1.333v1.333c0 .734.6 1.334 1.334 1.334H6V14h1.333v-1.333h1.334V14H10v-1.333h1.333c.734 0 1.334-.6 1.334-1.334V10H14V8.667h-1.333V7.333H14zm-2.667 4H4.667V4.667h6.666v6.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="memory_svg__b" fill="#fff">
        <use xlinkHref="#memory_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#memory_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMemory
