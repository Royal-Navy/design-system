import React, { SVGProps } from 'react'

const SvgWebAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="web-asset_svg__a"
        d="M12.667 2.667H3.333C2.593 2.667 2 3.267 2 4v8c0 .733.593 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333V4c0-.733-.593-1.333-1.333-1.333zm0 9.333H3.333V5.333h9.334V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="web-asset_svg__b" fill="#fff">
        <use xlinkHref="#web-asset_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#web-asset_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWebAsset
