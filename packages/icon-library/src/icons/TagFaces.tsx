import React, { SVGProps } from 'react'

const SvgTagFaces = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tag-faces_svg__a"
        d="M7.993 1.333A6.663 6.663 0 001.333 8c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0014.667 8a6.67 6.67 0 00-6.674-6.667zm.007 12A5.332 5.332 0 012.667 8 5.332 5.332 0 018 2.667 5.332 5.332 0 0113.333 8 5.332 5.332 0 018 13.333zm2.333-6c.554 0 1-.446 1-1 0-.553-.446-1-1-1-.553 0-1 .447-1 1 0 .554.447 1 1 1zm-4.666 0c.553 0 1-.446 1-1 0-.553-.447-1-1-1-.554 0-1 .447-1 1 0 .554.446 1 1 1zM8 11.667a3.664 3.664 0 003.407-2.334H4.593A3.664 3.664 0 008 11.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tag-faces_svg__b" fill="#fff">
        <use xlinkHref="#tag-faces_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tag-faces_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTagFaces
