import React, { SVGProps } from 'react'

const SvgRotateRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rotate-right_svg__a"
        d="M10.367 3.7L7.333.667v2.046A5.331 5.331 0 002.667 8c0 2.72 2.033 4.96 4.666 5.287V11.94A3.998 3.998 0 014 8c0-1.98 1.44-3.62 3.333-3.94v2.607L10.367 3.7zm2.92 3.633a5.27 5.27 0 00-1.08-2.593l-.947.947c.36.5.587 1.066.68 1.646h1.347zm-4.62 4.6v1.347a5.283 5.283 0 002.6-1.073l-.96-.96c-.5.36-1.06.593-1.64.686zm2.593-1.613l.947.94a5.27 5.27 0 001.08-2.593H11.94a3.931 3.931 0 01-.68 1.653z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rotate-right_svg__b" fill="#fff">
        <use xlinkHref="#rotate-right_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rotate-right_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRotateRight
