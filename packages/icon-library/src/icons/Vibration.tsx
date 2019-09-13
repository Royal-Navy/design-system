import React, { SVGProps } from 'react'

const SvgVibration = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="vibration_svg__a"
        d="M0 9.778h.889V6.222H0v3.556zm1.778 1.778h.889V4.444h-.89v7.112zM15.11 6.222v3.556H16V6.222h-.889zm-1.778 5.334h.89V4.444h-.89v7.112zm-2.222-9.778H4.89c-.738 0-1.333.595-1.333 1.333v9.778c0 .738.595 1.333 1.333 1.333h6.222c.738 0 1.333-.595 1.333-1.333V3.11c0-.738-.595-1.333-1.333-1.333zm0 11.11H4.89V3.112h6.222v9.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="vibration_svg__b" fill="#fff">
        <use xlinkHref="#vibration_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#vibration_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVibration
