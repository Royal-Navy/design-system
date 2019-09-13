import React, { SVGProps } from 'react'

const SvgPictureInPictureAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="picture-in-picture-alt_svg__a"
        d="M12.667 7.333H7.333v4h5.334v-4zm2.666 5.334V3.32c0-.733-.6-1.32-1.333-1.32H2C1.267 2 .667 2.587.667 3.32v9.347C.667 13.4 1.267 14 2 14h12c.733 0 1.333-.6 1.333-1.333zM14 12.68H2V3.313h12v9.367z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="picture-in-picture-alt_svg__b" fill="#fff">
        <use xlinkHref="#picture-in-picture-alt_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#picture-in-picture-alt_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPictureInPictureAlt
