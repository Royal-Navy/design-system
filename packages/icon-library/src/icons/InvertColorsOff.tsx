import React, { SVGProps } from 'react'

const SvgInvertColorsOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="invert-colors-off_svg__a"
        d="M13.767 13.913L12.2 12.347 8 8.153l-2.373-2.38-.947-.94L2.847 3 2 3.847 3.853 5.7a5.336 5.336 0 00.374 7.127A5.32 5.32 0 008 14.387c1.193 0 2.38-.394 3.353-1.187l1.8 1.8.847-.847-.233-.24zM8 13.06a3.952 3.952 0 01-2.827-1.173A3.964 3.964 0 014 9.06c0-.88.287-1.713.807-2.4L8 9.847v3.213zM8 3.4v3.053l4.833 4.84a5.323 5.323 0 00-1.066-6.006L8 1.513 5.533 3.98l.94.94L8 3.4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="invert-colors-off_svg__b" fill="#fff">
        <use xlinkHref="#invert-colors-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#invert-colors-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInvertColorsOff
