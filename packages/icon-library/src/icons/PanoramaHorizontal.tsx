import React, { SVGProps } from 'react'

const SvgPanoramaHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="panorama-horizontal_svg__a"
        d="M13.333 4.36v7.273A18.732 18.732 0 008 10.86c-1.813 0-3.6.26-5.333.773V4.36c1.733.513 3.52.773 5.333.773 1.813.007 3.6-.253 5.333-.773zm.954-1.693a.597.597 0 00-.207.04A17.341 17.341 0 018 3.8c-2.06 0-4.12-.367-6.08-1.093a.626.626 0 00-.207-.04c-.226 0-.38.153-.38.42v9.833c0 .26.154.413.38.413a.597.597 0 00.207-.04A17.341 17.341 0 018 12.2c2.06 0 4.12.367 6.08 1.093.073.027.14.04.207.04.22 0 .38-.153.38-.42V3.087c0-.267-.16-.42-.38-.42z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="panorama-horizontal_svg__b" fill="#fff">
        <use xlinkHref="#panorama-horizontal_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#panorama-horizontal_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPanoramaHorizontal
