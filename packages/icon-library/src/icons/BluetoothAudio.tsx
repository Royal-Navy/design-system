import React, { SVGProps } from 'react'

const SvgBluetoothAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="bluetooth-audio_svg__a"
        d="M9.493 8.007l1.547 1.546A4.29 4.29 0 0011.333 8c0-.547-.106-1.06-.286-1.54L9.493 8.007zm3.527-3.534l-.84.84a5.832 5.832 0 010 5.36l.8.8a6.624 6.624 0 001.027-3.54 6.685 6.685 0 00-.987-3.46zm-2.547.667L6.667 1.333H6v5.06l-3.06-3.06-.94.94L5.727 8 2 11.727l.94.94L6 9.607v5.06h.667l3.806-3.807L7.607 8l2.866-2.86zm-3.14-1.253L8.587 5.14 7.333 6.393V3.887zm1.254 6.973l-1.254 1.253V9.607l1.254 1.253z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="bluetooth-audio_svg__b" fill="#fff">
        <use xlinkHref="#bluetooth-audio_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#bluetooth-audio_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBluetoothAudio
