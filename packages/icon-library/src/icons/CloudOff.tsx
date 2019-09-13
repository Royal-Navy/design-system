import React, { SVGProps } from 'react'

const SvgCloudOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cloud-off_svg__a"
        d="M12.9 6.693A4.993 4.993 0 008 2.667c-.987 0-1.9.286-2.673.78l.973.973a3.665 3.665 0 015.367 3.247V8h1c1.106 0 2 .893 2 2 0 .753-.427 1.407-1.04 1.747l.966.966A3.336 3.336 0 0016 10a3.317 3.317 0 00-3.1-3.307zM2 3.513L3.833 5.34A4.005 4.005 0 000 9.333c0 2.207 1.793 4 4 4h7.82l1.333 1.334.847-.847L2.847 2.667 2 3.513zm3.153 3.154L10.487 12H4a2.666 2.666 0 110-5.333h1.153z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cloud-off_svg__b" fill="#fff">
        <use xlinkHref="#cloud-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cloud-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCloudOff
