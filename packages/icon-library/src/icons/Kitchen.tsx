import React, { SVGProps } from 'react'

const SvgKitchen = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="kitchen_svg__a"
        d="M12 1.34l-8-.007c-.733 0-1.333.594-1.333 1.334v10.666c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V2.667c0-.74-.6-1.327-1.333-1.327zm0 11.993H4V7.32h8v6.013zM12 6H4V2.667h8V6zM5.333 3.333h1.334v2H5.333v-2zm0 4.667h1.334v3.333H5.333V8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="kitchen_svg__b" fill="#fff">
        <use xlinkHref="#kitchen_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#kitchen_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKitchen
