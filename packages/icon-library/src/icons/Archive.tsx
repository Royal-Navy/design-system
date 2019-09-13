import React, { SVGProps } from 'react'

const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="archive_svg__a"
        d="M13.693 3.487l-.926-1.12A.968.968 0 0012 2H4a.99.99 0 00-.773.367l-.92 1.12A1.305 1.305 0 002 4.333v8.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V4.333c0-.32-.113-.62-.307-.846zM8 11.667L4.333 8h2.334V6.667h2.666V8h2.334L8 11.667zM3.413 3.333l.54-.666h8l.627.666H3.413z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="archive_svg__b" fill="#fff">
        <use xlinkHref="#archive_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#archive_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArchive
