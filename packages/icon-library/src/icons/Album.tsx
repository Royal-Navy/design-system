import React, { SVGProps } from 'react'

const SvgAlbum = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="album_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zM8 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-3.667c-.367 0-.667.3-.667.667 0 .367.3.667.667.667.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="album_svg__b" fill="#fff">
        <use xlinkHref="#album_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#album_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAlbum
