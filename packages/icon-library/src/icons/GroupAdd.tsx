import React, { SVGProps } from 'react'

const SvgGroupAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="group-add_svg__a"
        d="M8 7.111a1.777 1.777 0 10.001-3.554A1.777 1.777 0 008 7.11zm3.556 0a1.777 1.777 0 100-3.555c-.32 0-.614.088-.872.24.267.453.427.977.427 1.537 0 .56-.16 1.085-.427 1.538.258.151.56.24.872.24zM8 8.178c-1.484 0-4.444.738-4.444 2.222v1.156h8.888V10.4c0-1.484-2.96-2.222-4.444-2.222zM4.444 6.222H2.667V4.444h-.89v1.778H0v.89h1.778v1.777h.889V7.11h1.777v-.889zm8.205 2.054c.667.533 1.129 1.226 1.129 2.124v1.156H16V10.4c0-1.164-1.84-1.876-3.351-2.124z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="group-add_svg__b" fill="#fff">
        <use xlinkHref="#group-add_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#group-add_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGroupAdd
