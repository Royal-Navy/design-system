import React, { SVGProps } from 'react'

const SvgPermCameraMic = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="perm-camera-mic_svg__a"
        d="M13.333 3.333H11.22L10 2H6L4.78 3.333H2.667c-.734 0-1.334.6-1.334 1.334v8c0 .733.6 1.333 1.334 1.333h4.666v-1.393A4.005 4.005 0 014 8.667h1.333a2.666 2.666 0 105.334 0H12c0 1.98-1.447 3.62-3.333 3.94V14h4.666c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm-4 5.334C9.333 9.4 8.733 10 8 10s-1.333-.6-1.333-1.333V6c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333v2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="perm-camera-mic_svg__b" fill="#fff">
        <use xlinkHref="#perm-camera-mic_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#perm-camera-mic_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPermCameraMic
