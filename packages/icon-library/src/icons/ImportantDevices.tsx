import React, { SVGProps } from 'react'

const SvgImportantDevices = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="important-devices_svg__a"
        d="M15.333 7.34L12 7.333c-.367 0-.667.3-.667.667v6c0 .367.3.667.667.667h3.333c.367 0 .667-.3.667-.667V8c0-.367-.3-.66-.667-.66zm0 5.993H12V8.667h3.333v4.666zm-2-12h-12C.593 1.333 0 1.927 0 2.667v8C0 11.4.593 12 1.333 12H6v1.333H4.667v1.334H10v-1.334H8.667V12H10v-1.333H1.333v-8h12V6h1.334V2.667c0-.74-.6-1.334-1.334-1.334zM7.98 6l-.647-2-.646 2h-2.02l1.646 1.173-.626 1.94 1.646-1.2 1.647 1.2-.627-1.94L10 6H7.98z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="important-devices_svg__b" fill="#fff">
        <use xlinkHref="#important-devices_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#important-devices_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgImportantDevices
