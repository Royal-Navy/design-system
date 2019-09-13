import React, { SVGProps } from 'react'

const SvgLayersClear = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="layers-clear_svg__a"
        d="M13.207 9.993L14 9.38l-.953-.953-.794.613.954.953zm-.3-3.146L14 6 8 1.333 6.06 2.847 11.307 8.1l1.6-1.253zM2.18.667l-.847.846 2.814 2.814L2 6l1.087.847L8 10.667 9.4 9.58l.953.953L8 12.36 3.087 8.54 2 9.38l6 4.667 3.3-2.567L13.82 14l.847-.847L2.18.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="layers-clear_svg__b" fill="#fff">
        <use xlinkHref="#layers-clear_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#layers-clear_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLayersClear
