import React, { SVGProps } from 'react'

const SvgSettingsApplications = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-applications_svg__a"
        d="M8 6.667c-.733 0-1.333.6-1.333 1.333S7.267 9.333 8 9.333 9.333 8.733 9.333 8 8.733 6.667 8 6.667zM12.667 2H3.333C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334c.74 0 1.333-.6 1.333-1.333V3.333C14 2.6 13.407 2 12.667 2zM11.5 8c0 .153-.013.307-.033.453l.986.774c.087.073.114.2.054.3l-.934 1.613c-.06.1-.18.14-.286.1l-1.16-.467c-.24.187-.507.34-.787.46l-.173 1.234c-.02.113-.12.2-.234.2H7.067a.243.243 0 01-.234-.194L6.66 11.24a3.428 3.428 0 01-.787-.46l-1.16.467a.236.236 0 01-.286-.1l-.934-1.614a.236.236 0 01.054-.3l.986-.773A3.558 3.558 0 014.5 8c0-.153.013-.307.033-.453l-.986-.774a.236.236 0 01-.054-.3l.934-1.613c.06-.1.18-.14.286-.1l1.16.467c.24-.187.507-.34.787-.46l.173-1.234c.02-.113.12-.2.234-.2h1.866c.114 0 .214.087.234.194L9.34 4.76c.287.12.547.273.787.46l1.16-.467c.106-.04.226 0 .286.1l.934 1.614c.06.1.033.226-.054.3l-.986.773c.02.153.033.307.033.46z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-applications_svg__b" fill="#fff">
        <use xlinkHref="#settings-applications_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-applications_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsApplications
