import React, { SVGProps } from 'react'

const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="train_svg__a"
        d="M8 1.333c-2.667 0-5.333.334-5.333 2.667v6.333A2.336 2.336 0 005 12.667l-1 1V14h1.487l1.333-1.333h2.513L10.667 14H12v-.333l-1-1a2.336 2.336 0 002.333-2.334V4c0-2.333-2.386-2.667-5.333-2.667zm-3 10c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1zm2.333-4.666H4V4h3.333v2.667zm1.334 0V4H12v2.667H8.667zM11 11.333c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="train_svg__b" fill="#fff">
        <use xlinkHref="#train_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#train_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTrain
