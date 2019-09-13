import React, { SVGProps } from 'react'

const SvgArtTrack = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="art-track_svg__a"
        d="M14.667 8.667H9.333V7.333h5.334v1.334zm0-4H9.333V6h5.334V4.667zm-5.334 6.666h5.334V10H9.333v1.333zM8 6v4c0 .733-.6 1.333-1.333 1.333h-4c-.734 0-1.334-.6-1.334-1.333V6c0-.733.6-1.333 1.334-1.333h4C7.4 4.667 8 5.267 8 6zm-1 4L5.5 8 4.333 9.507 3.5 8.5 2.333 10H7z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="art-track_svg__b" fill="#fff">
        <use xlinkHref="#art-track_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#art-track_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArtTrack
