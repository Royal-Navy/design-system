import React, { SVGProps } from 'react'

const SvgNoEncryption = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="no-encryption_svg__a"
        d="M14 14.52L2.813 3.333 2 4.147l1.36 1.36c-.413.226-.693.66-.693 1.16v6.666c0 .734.6 1.334 1.333 1.334h8c.153 0 .3-.034.44-.08l.747.746.813-.813zM5.933 4c0-1.14.927-2.067 2.067-2.067 1.14 0 2.067.927 2.067 2.067v1.333H6.44l6.893 6.894v-5.56c0-.734-.6-1.334-1.333-1.334h-.667V4A3.335 3.335 0 008 .667C6.293.667 4.907 1.953 4.707 3.6l1.226 1.227V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="no-encryption_svg__b" fill="#fff">
        <use xlinkHref="#no-encryption_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#no-encryption_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNoEncryption
