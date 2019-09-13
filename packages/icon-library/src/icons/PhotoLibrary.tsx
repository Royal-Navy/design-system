import React, { SVGProps } from 'react'

const SvgPhotoLibrary = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="photo-library_svg__a"
        d="M14.667 10.667v-8c0-.734-.6-1.334-1.334-1.334h-8C4.6 1.333 4 1.933 4 2.667v8C4 11.4 4.6 12 5.333 12h8c.734 0 1.334-.6 1.334-1.333zM7.333 8l1.354 1.807 1.98-2.474 2.666 3.334h-8l2-2.667zm-6-4v9.333c0 .734.6 1.334 1.334 1.334H12v-1.334H2.667V4H1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="photo-library_svg__b" fill="#fff">
        <use xlinkHref="#photo-library_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#photo-library_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhotoLibrary
