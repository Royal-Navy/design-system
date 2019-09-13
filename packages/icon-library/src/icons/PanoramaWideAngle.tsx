import React, { SVGProps } from 'react'

const SvgPanoramaWideAngle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="panorama-wide-angle_svg__a"
        d="M8 4c1.633 0 3.14.133 4.86.427A14 14 0 0113.333 8a14 14 0 01-.473 3.573A27.92 27.92 0 018 12a27.92 27.92 0 01-4.86-.427A14 14 0 012.667 8a14 14 0 01.473-3.573A27.92 27.92 0 018 4zm0-1.333c-1.82 0-3.48.16-5.3.48l-.62.106-.167.6A15.33 15.33 0 001.333 8c0 1.38.194 2.767.58 4.147l.167.593.62.107c1.82.326 3.48.486 5.3.486 1.82 0 3.48-.16 5.3-.48l.62-.106.167-.594c.386-1.386.58-2.773.58-4.153 0-1.38-.194-2.767-.58-4.147l-.167-.593-.62-.107A29.087 29.087 0 008 2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="panorama-wide-angle_svg__b" fill="#fff">
        <use xlinkHref="#panorama-wide-angle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#panorama-wide-angle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPanoramaWideAngle
