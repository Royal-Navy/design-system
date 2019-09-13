import React, { SVGProps } from 'react'

const SvgMonochromePhotos = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="monochrome-photos_svg__a"
        d="M13.333 3.333H11.2L10 2H6L4.8 3.333H2.667c-.734 0-1.334.6-1.334 1.334v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm0 9.334H8V12a3.301 3.301 0 01-3.333-3.333A3.301 3.301 0 018 5.333v-.666h5.333v8zm-2-4A3.301 3.301 0 008 5.333v1.2c1.2 0 2.133.934 2.133 2.134 0 1.2-.933 2.133-2.133 2.133V12a3.301 3.301 0 003.333-3.333zm-5.466 0c0 1.2.933 2.133 2.133 2.133V6.533c-1.2 0-2.133.934-2.133 2.134z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="monochrome-photos_svg__b" fill="#fff">
        <use xlinkHref="#monochrome-photos_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#monochrome-photos_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMonochromePhotos
