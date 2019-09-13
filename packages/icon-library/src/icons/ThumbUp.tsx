import React, { SVGProps } from 'react'

const SvgThumbUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="thumb-up_svg__a"
        d="M.667 14h2.666V6H.667v8zm14.666-7.333c0-.734-.6-1.334-1.333-1.334H9.793l.634-3.046.02-.214c0-.273-.114-.526-.294-.706l-.706-.7L5.06 5.06c-.247.24-.393.573-.393.94v6.667C4.667 13.4 5.267 14 6 14h6c.553 0 1.027-.333 1.227-.813l2.013-4.7c.06-.154.093-.314.093-.487V6.727l-.006-.007.006-.053z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="thumb-up_svg__b" fill="#fff">
        <use xlinkHref="#thumb-up_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#thumb-up_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgThumbUp
