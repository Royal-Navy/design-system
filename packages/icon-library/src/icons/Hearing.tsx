import React, { SVGProps } from 'react'

const SvgHearing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="hearing_svg__a"
        d="M11.333 13.333c-.193 0-.373-.04-.506-.1-.474-.246-.807-.586-1.14-1.586-.34-1.04-.98-1.527-1.594-2C7.567 9.24 7.02 8.82 6.547 7.96 6.193 7.32 6 6.62 6 6a3.301 3.301 0 013.333-3.333A3.301 3.301 0 0112.667 6H14c0-2.62-2.047-4.667-4.667-4.667-2.62 0-4.666 2.047-4.666 4.667 0 .84.253 1.767.713 2.6.607 1.1 1.32 1.653 1.9 2.1.54.413.927.713 1.14 1.367.4 1.213.913 1.893 1.82 2.366A2.666 2.666 0 0014 12h-1.333c0 .733-.6 1.333-1.334 1.333zM5.093 1.76L4.147.813A7.31 7.31 0 002 6c0 2.027.82 3.86 2.147 5.187l.94-.94A6.007 6.007 0 013.333 6c0-1.66.674-3.16 1.76-4.24zM7.667 6A1.667 1.667 0 1011 5.999 1.667 1.667 0 007.667 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="hearing_svg__b" fill="#fff">
        <use xlinkHref="#hearing_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#hearing_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHearing
