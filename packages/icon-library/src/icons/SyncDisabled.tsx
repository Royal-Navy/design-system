import React, { SVGProps } from 'react'

const SvgSyncDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="sync-disabled_svg__a"
        d="M6.667 4.233V2.84a5.48 5.48 0 00-1.487.64l.973.973c.167-.08.334-.16.514-.22zm-4.76-.626L3.48 5.18a5.284 5.284 0 00.76 6.58l-1.573 1.573h4v-4l-1.494 1.494A4.002 4.002 0 014 8c0-.667.167-1.293.453-1.847L9.84 11.54a3.53 3.53 0 01-.513.227v1.393a5.48 5.48 0 001.486-.64l1.574 1.573.846-.846L2.76 2.76l-.853.847zm11.426-.94h-4v4l1.494-1.494A4.002 4.002 0 0112 8c0 .667-.167 1.293-.453 1.847l.973.973a5.284 5.284 0 00-.76-6.58l1.573-1.573z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="sync-disabled_svg__b" fill="#fff">
        <use xlinkHref="#sync-disabled_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#sync-disabled_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSyncDisabled
