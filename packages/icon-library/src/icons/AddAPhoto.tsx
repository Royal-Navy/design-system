import React, { SVGProps } from 'react'

const SvgAddAPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="add-a-photo_svg__a"
        d="M2 2.667v-2h1.333v2h2V4h-2v2H2V4H0V2.667h2zm2 4v-2h2v-2h4.667L11.887 4H14c.733 0 1.333.6 1.333 1.333v8c0 .734-.6 1.334-1.333 1.334H3.333c-.733 0-1.333-.6-1.333-1.334V6.667h2zm4.667 6a3.335 3.335 0 000-6.667 3.335 3.335 0 000 6.667zM6.533 9.333c0 1.18.954 2.134 2.134 2.134s2.133-.954 2.133-2.134S9.847 7.2 8.667 7.2c-1.18 0-2.134.953-2.134 2.133z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="add-a-photo_svg__b" fill="#fff">
        <use xlinkHref="#add-a-photo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#add-a-photo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAddAPhoto
