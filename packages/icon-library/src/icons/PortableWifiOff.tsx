import React, { SVGProps } from 'react'

const SvgPortableWifiOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="portable-wifi-off_svg__a"
        d="M11.707 9.493C11.893 9.033 12 8.527 12 8c0-2.207-1.793-4-4-4-.527 0-1.033.107-1.493.293l1.08 1.08A2.8 2.8 0 018 5.333a2.666 2.666 0 012.633 3.087l1.074 1.073zM8 2.667A5.332 5.332 0 0113.333 8c0 .9-.233 1.747-.633 2.493l.98.98c.627-1.013.987-2.2.987-3.473A6.67 6.67 0 008 1.333c-1.273 0-2.46.367-3.473.98l.973.974a5.36 5.36 0 012.5-.62zm-5.82-1l-.847.846 1.4 1.4a6.66 6.66 0 001.927 9.853l.667-1.153A5.337 5.337 0 012.667 8a5.27 5.27 0 011.02-3.127l.953.96C4.24 6.453 4 7.2 4 8c0 1.48.807 2.767 2 3.46l.667-1.16A2.665 2.665 0 015.333 8c0-.433.114-.833.294-1.193L6.68 7.86 6.667 8c0 .733.6 1.333 1.333 1.333l.14-.013.007.007 5.006 5.006.847-.846L2.847 2.333l-.667-.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="portable-wifi-off_svg__b" fill="#fff">
        <use xlinkHref="#portable-wifi-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#portable-wifi-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPortableWifiOff
