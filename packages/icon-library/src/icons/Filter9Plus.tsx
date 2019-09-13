import React, { SVGProps } from 'react'

const SvgFilter9Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-9-plus_svg__a"
        d="M2 3.333H.667V14c0 .733.6 1.333 1.333 1.333h10.667V14H2V3.333zM9.333 8V5.333C9.333 4.593 8.733 4 8 4h-.667C6.6 4 6 4.593 6 5.333V6c0 .74.6 1.333 1.333 1.333H8V8H6v1.333h2c.733 0 1.333-.593 1.333-1.333zm-2-2v-.667H8V6h-.667zM14 .667H4.667c-.734 0-1.334.6-1.334 1.333v9.333c0 .734.6 1.334 1.334 1.334H14c.733 0 1.333-.6 1.333-1.334V2c0-.733-.6-1.333-1.333-1.333zM14 6h-1.333V4.667h-1.334V6H10v1.333h1.333v1.334h1.334V7.333H14v4H4.667V2H14v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-9-plus_svg__b" fill="#fff">
        <use xlinkHref="#filter-9-plus_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-9-plus_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilter9Plus
