import React, { SVGProps } from 'react'

const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="picture-in-picture_svg__a"
        d="M12.667 4.667H7.333v4h5.334v-4zM14 2H2C1.267 2 .667 2.6.667 3.333v9.334c0 .733.6 1.32 1.333 1.32h12c.733 0 1.333-.587 1.333-1.32V3.333C15.333 2.6 14.733 2 14 2zm0 10.673H2V3.32h12v9.353z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="picture-in-picture_svg__b" fill="#fff">
        <use xlinkHref="#picture-in-picture_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#picture-in-picture_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPictureInPicture
