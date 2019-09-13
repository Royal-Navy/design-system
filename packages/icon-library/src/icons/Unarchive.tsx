import React, { SVGProps } from 'react'

const SvgUnarchive = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="unarchive_svg__a"
        d="M13.7 3.48l-.927-1.12C12.587 2.14 12.313 2 12 2H4a.968.968 0 00-.767.367L2.307 3.48A1.323 1.323 0 002 4.333v8.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V4.333c0-.326-.113-.62-.3-.853zM8 6.333L11.667 10H9.333v1.333H6.667V10H4.333L8 6.333zm-4.587-3l.547-.666h8l.62.666H3.413z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="unarchive_svg__b" fill="#fff">
        <use xlinkHref="#unarchive_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#unarchive_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgUnarchive
