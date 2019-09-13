import React, { SVGProps } from 'react'

const SvgDomain = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="domain_svg__a"
        d="M12.444 7.111h-.888V8h.888v-.889zM8 4.444V1.778H.889v12.444H15.11V4.444H8zm-4.444 8h-.89v-.888h.89v.888zm0-2.666h-.89v-.89h.89v.89zm0-2.667h-.89v-.889h.89v.89zm0-2.667h-.89v-.888h.89v.888zm2.666 8h-.889v-.888h.89v.888zm0-2.666h-.889v-.89h.89v.89zm0-2.667h-.889v-.889h.89v.89zm0-2.667h-.889v-.888h.89v.888zm7.111 8H8V6.222h5.333v6.222zM9.778 7.111h-.89V8h.89v-.889zm2.666 3.556h-.888v.889h.888v-.89zm-2.666 0h-.89v.889h.89v-.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="domain_svg__b" fill="#fff">
        <use xlinkHref="#domain_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#domain_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDomain
