import React, { SVGProps } from 'react'

const SvgTonality = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tonality_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm-.667 11.954A5.331 5.331 0 012.667 8c0-2.72 2.033-4.96 4.666-5.287v10.574zM8.667 2.713c.686.087 1.333.3 1.913.62H8.667v-.62zm0 1.954h3.493c.167.206.32.433.453.666H8.667v-.666zm0 2h4.493c.053.22.1.44.127.666h-4.62v-.666zm0 6.62v-.62h1.913c-.58.32-1.227.533-1.913.62zm3.493-1.954H8.667v-.666h3.946c-.133.233-.286.46-.453.666zm1-2H8.667v-.666h4.62a5.599 5.599 0 01-.127.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tonality_svg__b" fill="#fff">
        <use xlinkHref="#tonality_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tonality_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTonality
