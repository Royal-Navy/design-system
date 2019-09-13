import React, { SVGProps } from 'react'

const SvgPhotoFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="photo-filter_svg__a"
        d="M12.68 6.667v6H3.333V3.333h6V2H3.347c-.734 0-1.334.6-1.334 1.333v9.334c0 .733.6 1.333 1.334 1.333h9.333c.733 0 1.333-.6 1.333-1.333v-6H12.68zm-1.347 0l.627-1.374 1.373-.626-1.373-.627-.627-1.373-.626 1.373-1.374.627 1.374.626.626 1.374zm-2.5.5L8 5.333l-.833 1.834L5.333 8l1.834.833L8 10.667l.833-1.834L10.667 8l-1.834-.833z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="photo-filter_svg__b" fill="#fff">
        <use xlinkHref="#photo-filter_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#photo-filter_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhotoFilter
