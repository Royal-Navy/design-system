import React, { SVGProps } from 'react'

const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="panorama_svg__a"
        d="M15.333 12V4c0-.733-.6-1.333-1.333-1.333H2c-.733 0-1.333.6-1.333 1.333v8c0 .733.6 1.333 1.333 1.333h12c.733 0 1.333-.6 1.333-1.333zM5.667 8.333l1.666 2.007 2.334-3.007 3 4H3.333l2.334-3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="panorama_svg__b" fill="#fff">
        <use xlinkHref="#panorama_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#panorama_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPanorama
