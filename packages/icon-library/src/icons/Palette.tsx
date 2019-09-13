import React, { SVGProps } from 'react'

const SvgPalette = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="palette_svg__a"
        d="M8 2a6 6 0 000 12 .999.999 0 00.74-1.673.999.999 0 01.747-1.66h1.18A3.335 3.335 0 0014 7.333C14 4.387 11.313 2 8 2zM4.333 8c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .553-.446 1-1 1zm2-2.667c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .554-.446 1-1 1zm3.334 0c-.554 0-1-.446-1-1 0-.553.446-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1zm2 2.667c-.554 0-1-.447-1-1 0-.553.446-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="palette_svg__b" fill="#fff">
        <use xlinkHref="#palette_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#palette_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPalette
