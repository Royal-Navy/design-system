import React, { SVGProps } from 'react'

const SvgPartyMode = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="party-mode_svg__a"
        d="M13.333 2.667H11.22L10 1.333H6L4.78 2.667H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zM8 4.667c1.087 0 2.04.526 2.653 1.333H8c-1.107 0-2 .893-2 2 0 .233.047.46.12.667H4.733a3.335 3.335 0 013.267-4zm0 6.666A3.324 3.324 0 015.347 10H8c1.107 0 2-.893 2-2 0-.233-.047-.46-.12-.667h1.387a3.335 3.335 0 01-3.267 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="party-mode_svg__b" fill="#fff">
        <use xlinkHref="#party-mode_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#party-mode_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPartyMode
