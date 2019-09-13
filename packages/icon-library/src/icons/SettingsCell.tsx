import React, { SVGProps } from 'react'

const SvgSettingsCell = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-cell_svg__a"
        d="M4.667 16H6v-1.333H4.667V16zm2.666 0h1.334v-1.333H7.333V16zM10 16h1.333v-1.333H10V16zM10.667.007L5.333 0C4.6 0 4 .6 4 1.333V12c0 .733.6 1.333 1.333 1.333h5.334c.733 0 1.333-.6 1.333-1.333V1.333C12 .6 11.4.007 10.667.007zm0 10.66H5.333v-8h5.334v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-cell_svg__b" fill="#fff">
        <use xlinkHref="#settings-cell_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-cell_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsCell
