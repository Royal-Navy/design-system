import React, { SVGProps } from 'react'

const SvgSettingsBackupRestore = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-backup-restore_svg__a"
        d="M9.333 8c0-.733-.6-1.333-1.333-1.333S6.667 7.267 6.667 8 7.267 9.333 8 9.333 9.333 8.733 9.333 8zM8 2a6 6 0 00-6 6H0l2.667 2.667L5.333 8h-2A4.663 4.663 0 018 3.333 4.663 4.663 0 0112.667 8a4.663 4.663 0 01-7.374 3.8l-.946.96A6 6 0 108 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-backup-restore_svg__b" fill="#fff">
        <use xlinkHref="#settings-backup-restore_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-backup-restore_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsBackupRestore
