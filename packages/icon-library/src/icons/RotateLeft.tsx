import React, { SVGProps } from 'react'

const SvgRotateLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rotate-left_svg__a"
        d="M4.74 5.687L3.8 4.74a5.281 5.281 0 00-1.087 2.593H4.06c.093-.58.327-1.146.68-1.646zm-.68 2.98H2.713a5.27 5.27 0 001.08 2.593l.94-.947c-.346-.5-.58-1.06-.673-1.646zm.673 3.546c.774.6 1.674.96 2.6 1.074v-1.354c-.58-.1-1.14-.326-1.64-.686l-.96.966zm3.934-9.5V.667L5.633 3.7l3.034 2.967V4.06A3.998 3.998 0 0112 8c0 1.98-1.44 3.62-3.333 3.94v1.347A5.326 5.326 0 0013.333 8c0-2.72-2.033-4.96-4.666-5.287z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rotate-left_svg__b" fill="#fff">
        <use xlinkHref="#rotate-left_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rotate-left_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRotateLeft
