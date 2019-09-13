import React, { SVGProps } from 'react'

const SvgSpa = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="spa_svg__a"
        d="M10.327 6.42A9.572 9.572 0 008 8.173 9.245 9.245 0 005.673 6.42 8.125 8.125 0 018.04 1.333a7.861 7.861 0 012.287 5.087zM5.993 8.187c-.093-.067-.2-.127-.3-.194.1.074.207.127.3.194zm4.28-.167c-.086.06-.18.107-.266.173.086-.066.18-.113.266-.173zM8 10.3c1.433-2.187 3.88-3.633 6.667-3.633a8.116 8.116 0 01-5.354 7.66c-.426.146-.86.26-1.313.34a7.166 7.166 0 01-1.313-.34 8.116 8.116 0 01-5.354-7.66C4.12 6.667 6.567 8.113 8 10.3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="spa_svg__b" fill="#fff">
        <use xlinkHref="#spa_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#spa_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpa
