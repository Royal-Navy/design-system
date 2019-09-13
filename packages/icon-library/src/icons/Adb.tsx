import React, { SVGProps } from 'react'

const SvgAdb = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="adb_svg__a"
        d="M3.556 10.667A4.446 4.446 0 008 15.11a4.446 4.446 0 004.444-4.444V8H3.556v2.667zm7.066-7.92l1.334-1.334L11.43.89 9.964 2.356A4.306 4.306 0 008 1.876c-.711 0-1.369.177-1.964.48L4.569.889l-.516.524 1.334 1.334A4.398 4.398 0 003.556 6.32v.791h8.888V6.32c0-1.476-.72-2.764-1.822-3.573zm-4.4 2.586h-.889v-.889h.89v.89zm4.445 0h-.89v-.889h.89v.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="adb_svg__b" fill="#fff">
        <use xlinkHref="#adb_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#adb_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAdb
