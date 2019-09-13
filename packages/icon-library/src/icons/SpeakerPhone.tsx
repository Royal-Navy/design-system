import React, { SVGProps } from 'react'

const SvgSpeakerPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="speaker-phone_svg__a"
        d="M4.667 4.713l.953.954a3.367 3.367 0 014.76 0l.953-.954A4.701 4.701 0 008 3.333c-1.3 0-2.48.527-3.333 1.38zM8 .667c-2.013 0-3.84.82-5.167 2.14l.94.94A5.966 5.966 0 018 2c1.647 0 3.147.667 4.227 1.747l.94-.94A7.309 7.309 0 008 .667zm1.907 6.006l-3.814-.006a.76.76 0 00-.76.76V13.9c0 .42.34.76.76.76H9.9c.42 0 .76-.34.76-.76V7.427a.744.744 0 00-.753-.754zm.093 6.66H6V8h4v5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="speaker-phone_svg__b" fill="#fff">
        <use xlinkHref="#speaker-phone_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#speaker-phone_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpeakerPhone
