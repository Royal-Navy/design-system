import React, { SVGProps } from 'react'

const SvgYoutubeSearchedFor = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="youtube-searched-for_svg__a"
        d="M11.34 9.333h-.533l-.18-.18a4.301 4.301 0 001.046-2.82A4.333 4.333 0 007.34 2C4.947 2 3.007 4 3.007 6.333H1.333L3.893 9l2.774-2.667H4.34A3 3 0 116.127 9.08l-.987.987a4.316 4.316 0 005.013-.447l.18.18v.527l3.34 3.326.994-.986-3.327-3.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="youtube-searched-for_svg__b" fill="#fff">
        <use xlinkHref="#youtube-searched-for_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#youtube-searched-for_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgYoutubeSearchedFor
