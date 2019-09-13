import React, { SVGProps } from 'react'

const SvgLocationCity = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="location-city_svg__a"
        d="M10.667 7.111v-4L8.444.89 6.222 3.11v1.333H1.778v9.778H15.11v-7.11h-4.444zm-6.223 5.333h-.888v-.888h.888v.888zm0-2.666h-.888v-.89h.888v.89zm0-2.667h-.888v-.889h.888v.89zm4.445 5.333H8v-.888h.889v.888zm0-2.666H8v-.89h.889v.89zm0-2.667H8v-.889h.889v.89zm0-2.667H8v-.888h.889v.888zm4.444 8h-.889v-.888h.89v.888zm0-2.666h-.889v-.89h.89v.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="location-city_svg__b" fill="#fff">
        <use xlinkHref="#location-city_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#location-city_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocationCity
