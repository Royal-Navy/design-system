import React, { SVGProps } from 'react'

const SvgTranslate = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="translate_svg__a"
        d="M8.58 10.047L6.887 8.373l.02-.02A11.68 11.68 0 009.38 4h1.953V2.667H6.667V1.333H5.333v1.334H.667v1.326h7.446A10.475 10.475 0 016 7.567a10.43 10.43 0 01-1.54-2.234H3.127a11.708 11.708 0 001.986 3.04L1.72 11.72l.947.947L6 9.333l2.073 2.074.507-1.36zm3.753-3.38H11l-3 8h1.333l.747-2h3.167l.753 2h1.333l-3-8zm-1.746 4.666l1.08-2.886 1.08 2.886h-2.16z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="translate_svg__b" fill="#fff">
        <use xlinkHref="#translate_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#translate_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTranslate
