import React, { SVGProps } from 'react'

const SvgZoomOutMap = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="zoom-out-map_svg__a"
        d="M10 2l1.533 1.533-1.926 1.914.946.946 1.914-1.926L14 6V2h-4zM2 6l1.533-1.533 1.914 1.926.946-.946-1.926-1.914L6 2H2v4zm4 8l-1.533-1.533 1.926-1.914-.946-.946-1.914 1.926L2 10v4h4zm8-4l-1.533 1.533-1.914-1.926-.946.946 1.926 1.914L10 14h4v-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="zoom-out-map_svg__b" fill="#fff">
        <use xlinkHref="#zoom-out-map_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#zoom-out-map_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgZoomOutMap
