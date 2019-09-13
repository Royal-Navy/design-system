import React, { SVGProps } from 'react'

const SvgFitnessCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fitness-center_svg__a"
        d="M13.713 9.907l.954-.954L13.713 8l-2.38 2.38L5.62 4.667 8 2.287l-.953-.954-.954.954-.953-.954L3.713 2.76l-.953-.953-.953.953.953.953L1.333 5.14l.954.953-.954.954.954.953 2.38-2.38 5.713 5.713L8 13.713l.953.954.954-.954.953.954 1.427-1.427.953.953.953-.953-.953-.953 1.427-1.427z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fitness-center_svg__b" fill="#fff">
        <use xlinkHref="#fitness-center_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fitness-center_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFitnessCenter
