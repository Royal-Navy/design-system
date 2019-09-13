import React, { SVGProps } from 'react'

const SvgAllInclusive = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="all-inclusive_svg__a"
        d="M12.4 4.413c-.96 0-1.867.374-2.513 1.02L8 7.107 6.987 8h.006L5.2 9.593c-.427.427-.993.66-1.6.66A2.256 2.256 0 011.34 8 2.256 2.256 0 013.6 5.747c.607 0 1.173.233 1.627.686l.753.667 1.007-.893-.84-.74A3.58 3.58 0 003.6 4.413 3.6 3.6 0 000 8a3.6 3.6 0 003.6 3.587c.96 0 1.867-.374 2.513-1.02L8 8.9l.007.007L9.013 8h-.006L10.8 6.407c.427-.427.993-.66 1.6-.66A2.256 2.256 0 0114.66 8a2.256 2.256 0 01-2.26 2.253c-.6 0-1.173-.233-1.627-.686l-.76-.674-1.006.894.846.746A3.59 3.59 0 0012.4 11.58c1.987 0 3.6-1.607 3.6-3.587 0-1.98-1.613-3.58-3.6-3.58z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="all-inclusive_svg__b" fill="#fff">
        <use xlinkHref="#all-inclusive_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#all-inclusive_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAllInclusive
