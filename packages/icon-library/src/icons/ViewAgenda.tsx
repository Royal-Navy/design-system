import React, { SVGProps } from 'react'

const SvgViewAgenda = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-agenda_svg__a"
        d="M13.333 8.667H2c-.367 0-.667.3-.667.666v4c0 .367.3.667.667.667h11.333c.367 0 .667-.3.667-.667v-4c0-.366-.3-.666-.667-.666zm0-6.667H2c-.367 0-.667.3-.667.667v4c0 .366.3.666.667.666h11.333c.367 0 .667-.3.667-.666v-4C14 2.3 13.7 2 13.333 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-agenda_svg__b" fill="#fff">
        <use xlinkHref="#view-agenda_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-agenda_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewAgenda
