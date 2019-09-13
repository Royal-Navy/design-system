import React, { SVGProps } from 'react'

const SvgVideogameAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="videogame-asset_svg__a"
        d="M14 4H2C1.267 4 .667 4.6.667 5.333v5.334C.667 11.4 1.267 12 2 12h12c.733 0 1.333-.6 1.333-1.333V5.333C15.333 4.6 14.733 4 14 4zM7.333 8.667h-2v2H4v-2H2V7.333h2v-2h1.333v2h2v1.334zm3 1.333c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .553-.446 1-1 1zM13 8c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="videogame-asset_svg__b" fill="#fff">
        <use xlinkHref="#videogame-asset_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#videogame-asset_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVideogameAsset
