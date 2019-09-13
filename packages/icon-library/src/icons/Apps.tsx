import React, { SVGProps } from 'react'

const SvgApps = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="apps_svg__a"
        d="M1.778 8.889h2.666V6.222H1.778V8.89zm0-4.445h2.666V1.778H1.778v2.666zm0 8.89h2.666v-2.667H1.778v2.666zm4.444 0H8.89v-2.667H6.222v2.666zm4.445-4.445h2.666V6.222h-2.666V8.89zm-4.445 0H8.89V6.222H6.222V8.89zm4.445 4.444h2.666v-2.666h-2.666v2.666zm0-11.555v2.666h2.666V1.778h-2.666zM6.222 4.444H8.89V1.778H6.222v2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="apps_svg__b" fill="#fff">
        <use xlinkHref="#apps_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#apps_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgApps
