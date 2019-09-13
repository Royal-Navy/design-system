import React, { SVGProps } from 'react'

const SvgBeachAccess = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="beach-access_svg__a"
        d="M8.751 9.707l.954-.954 4.293 4.296-.951.951L8.75 9.707zm2.862-3.82L13.52 3.98c-2.633-2.633-6.9-2.64-9.533-.013 2.62-.867 5.54-.167 7.626 1.92zm-7.646-1.9c-2.627 2.633-2.62 6.9.013 9.533l1.907-1.907C3.8 9.527 3.1 6.607 3.967 3.987zm.013-.014l-.007.007c-.253 2.007.78 4.587 2.867 6.68l3.82-3.82C8.573 4.753 5.987 3.72 3.98 3.973z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="beach-access_svg__b" fill="#fff">
        <use xlinkHref="#beach-access_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#beach-access_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBeachAccess
