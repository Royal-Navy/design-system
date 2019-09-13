import React, { SVGProps } from 'react'

const SvgVoicemail = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="voicemail_svg__a"
        d="M12.333 4a3.665 3.665 0 00-2.826 6H6.493a3.665 3.665 0 00-2.827-6A3.665 3.665 0 000 7.667a3.665 3.665 0 003.667 3.666h8.666A3.665 3.665 0 0016 7.667 3.665 3.665 0 0012.333 4zm-8.666 6a2.336 2.336 0 01-2.334-2.333 2.336 2.336 0 012.334-2.334A2.336 2.336 0 016 7.667 2.336 2.336 0 013.667 10zm8.666 0A2.336 2.336 0 0110 7.667a2.336 2.336 0 012.333-2.334 2.336 2.336 0 012.334 2.334A2.336 2.336 0 0112.333 10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="voicemail_svg__b" fill="#fff">
        <use xlinkHref="#voicemail_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#voicemail_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVoicemail
