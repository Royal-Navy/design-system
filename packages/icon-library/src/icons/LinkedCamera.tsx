import React, { SVGProps } from 'react'

const SvgLinkedCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="linked-camera_svg__a"
        d="M8 11.467A2.133 2.133 0 118 7.2a2.133 2.133 0 010 4.267zm2.667-9.247v-.887c2.206 0 4 1.794 4 4h-.887a3.113 3.113 0 00-3.113-3.113zm0 1.78v-.887a2.22 2.22 0 012.22 2.22H12C12 4.593 11.407 4 10.667 4zm.666 2h3.334v7.333c0 .734-.6 1.334-1.334 1.334H2.667c-.734 0-1.334-.6-1.334-1.334v-8C1.333 4.6 1.933 4 2.667 4H4.78L6 2.667h4v2c.74 0 1.333.593 1.333 1.333zM8 12.667A3.335 3.335 0 008 6a3.335 3.335 0 000 6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="linked-camera_svg__b" fill="#fff">
        <use xlinkHref="#linked-camera_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#linked-camera_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLinkedCamera
