import React, { SVGProps } from 'react'

const SvgRingVolume = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="ring-volume_svg__a"
        d="M15.807 11.113A11.314 11.314 0 008 8a11.314 11.314 0 00-7.807 3.113.665.665 0 00-.193.474c0 .186.073.353.193.473l1.654 1.653c.12.12.286.194.473.194.18 0 .347-.074.467-.187a7.612 7.612 0 011.773-1.233.664.664 0 00.373-.6V9.82c.967-.32 2-.487 3.067-.487 1.067 0 2.1.167 3.067.48v2.067c0 .26.153.493.373.6a7.674 7.674 0 011.773 1.233c.12.12.287.187.467.187a.665.665 0 00.473-.193l1.654-1.654a.665.665 0 000-.94zm-1.7-6.94l-.94-.94L10.793 5.6l.94.94s2.3-2.347 2.374-2.367zm-5.44-2.84H7.333v3.334h1.334V1.333zm-4.4 5.207l.94-.94L2.84 3.227l-.947.946c.074.02 2.374 2.367 2.374 2.367z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="ring-volume_svg__b" fill="#fff">
        <use xlinkHref="#ring-volume_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#ring-volume_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRingVolume
