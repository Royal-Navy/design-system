import React, { SVGProps } from 'react'

const SvgSettingsInputSvideo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-input-svideo_svg__a"
        d="M5.333 7.667c0-.554-.446-1-1-1-.553 0-1 .446-1 1 0 .553.447 1 1 1 .554 0 1-.447 1-1zM10 4.333c0-.553-.447-1-1-1H7c-.553 0-1 .447-1 1 0 .554.447 1 1 1h2c.553 0 1-.446 1-1zM5.667 10c-.554 0-1 .447-1 1 0 .553.446 1 1 1 .553 0 1-.447 1-1 0-.553-.447-1-1-1zM8 .667A7.338 7.338 0 00.667 8 7.338 7.338 0 008 15.333 7.338 7.338 0 0015.333 8 7.338 7.338 0 008 .667zM8 14c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6zm3.667-7.333c-.554 0-1 .446-1 1 0 .553.446 1 1 1 .553 0 1-.447 1-1 0-.554-.447-1-1-1zM10.333 10c-.553 0-1 .447-1 1 0 .553.447 1 1 1 .554 0 1-.447 1-1 0-.553-.446-1-1-1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-input-svideo_svg__b" fill="#fff">
        <use xlinkHref="#settings-input-svideo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-input-svideo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsInputSvideo
