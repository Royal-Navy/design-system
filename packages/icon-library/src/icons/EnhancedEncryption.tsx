import React, { SVGProps } from 'react'

const SvgEnhancedEncryption = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="enhanced-encryption_svg__a"
        d="M12 5.333h-.667V4a3.335 3.335 0 00-6.666 0v1.333H4c-.733 0-1.333.6-1.333 1.334v6.666c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V6.667c0-.734-.6-1.334-1.333-1.334zM5.933 4c0-1.14.927-2.067 2.067-2.067 1.14 0 2.067.927 2.067 2.067v1.333H5.933V4zm4.734 6.667h-2v2H7.333v-2h-2V9.333h2v-2h1.334v2h2v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="enhanced-encryption_svg__b" fill="#fff">
        <use xlinkHref="#enhanced-encryption_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#enhanced-encryption_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEnhancedEncryption
