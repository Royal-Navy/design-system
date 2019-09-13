import React, { SVGProps } from 'react'

const SvgPanoramaVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="panorama-vertical_svg__a"
        d="M13.293 14.08A17.341 17.341 0 0112.2 8c0-2.06.367-4.12 1.093-6.08a.626.626 0 00.04-.207c0-.226-.153-.38-.42-.38H3.087c-.267 0-.42.154-.42.38 0 .067.013.134.04.207.733 1.96 1.1 4.02 1.1 6.08 0 2.06-.367 4.12-1.094 6.08a.509.509 0 00-.046.207c0 .22.153.38.42.38h9.833c.26 0 .42-.16.42-.38a.832.832 0 00-.047-.207zm-8.933-.747c.513-1.733.773-3.52.773-5.333 0-1.813-.26-3.6-.773-5.333h7.273A18.732 18.732 0 0010.86 8c0 1.813.26 3.6.773 5.333H4.36z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="panorama-vertical_svg__b" fill="#fff">
        <use xlinkHref="#panorama-vertical_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#panorama-vertical_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPanoramaVertical
