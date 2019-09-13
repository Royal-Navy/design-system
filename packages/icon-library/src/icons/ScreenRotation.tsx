import React, { SVGProps } from 'react'

const SvgScreenRotation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="screen-rotation_svg__a"
        d="M10.987 1.68a7 7 0 013.98 5.653h1C15.627 3.227 12.193 0 8 0l-.44.02 2.54 2.54.887-.88zM6.82 1.167a.994.994 0 00-1.413 0l-4.24 4.24a.994.994 0 000 1.413l8.013 8.013a.994.994 0 001.413 0l4.24-4.24a.994.994 0 000-1.413L6.82 1.167zm3.067 12.96L1.873 6.113l4.24-4.24 8.014 8.014-4.24 4.24zm-4.874.193a6.991 6.991 0 01-3.98-5.653h-1C.373 12.773 3.807 16 8 16l.44-.02-2.54-2.54-.887.88z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="screen-rotation_svg__b" fill="#fff">
        <use xlinkHref="#screen-rotation_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#screen-rotation_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgScreenRotation
