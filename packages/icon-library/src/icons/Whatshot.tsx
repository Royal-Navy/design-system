import React, { SVGProps } from 'react'

const SvgWhatshot = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="whatshot_svg__a"
        d="M9.058 1.333s.435 1.77.435 3.2c0 1.378-.897 2.49-2.275 2.49S4.8 5.91 4.8 4.532l.018-.24a9.216 9.216 0 00-2.151 5.93A5.338 5.338 0 008 15.555a5.338 5.338 0 005.333-5.334c0-3.6-1.67-6.8-4.275-8.889zm-1.138 12c-1.191 0-2.151-.933-2.151-2.089 0-1.084.693-1.84 1.875-2.08 1.183-.24 2.4-.808 3.076-1.715.258.862.4 1.769.4 2.693 0 1.76-1.44 3.191-3.2 3.191z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="whatshot_svg__b" fill="#fff">
        <use xlinkHref="#whatshot_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#whatshot_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWhatshot
