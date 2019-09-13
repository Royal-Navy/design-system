import React, { SVGProps } from 'react'

const SvgHighQuality = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="high-quality_svg__a"
        d="M12.667 2.667H3.333C2.593 2.667 2 3.267 2 4v8c0 .733.593 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333V4c0-.733-.6-1.333-1.333-1.333zM7.333 10h-1V8.667H5V10H4V6h1v1.667h1.333V6h1v4zM12 9.333c0 .367-.3.667-.667.667h-.5v1h-1v-1h-.5a.669.669 0 01-.666-.667V6.667c0-.367.3-.667.666-.667h2c.367 0 .667.3.667.667v2.666zM9.667 9H11V7H9.667v2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="high-quality_svg__b" fill="#fff">
        <use xlinkHref="#high-quality_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#high-quality_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHighQuality
