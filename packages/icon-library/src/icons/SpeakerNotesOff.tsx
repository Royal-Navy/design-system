import React, { SVGProps } from 'react'

const SvgSpeakerNotesOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="speaker-notes-off_svg__a"
        d="M7.027 7.333l-.36-.36-1.64-1.64L4 4.307 1.587 1.893l-.74-.74L0 2l1.34 1.34-.007 11.327L4 12h6l3.82 3.82.847-.847L11.693 12 7.027 7.333zm-1.694 2H4V8h1.333v1.333zM4 7.333V6l1.333 1.333H4zm9.333-6H2.72L6.667 5.28V4H12v1.333H6.72L7.387 6H12v1.333H8.72l4.66 4.66a1.331 1.331 0 001.287-1.326v-8c0-.734-.6-1.334-1.334-1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="speaker-notes-off_svg__b" fill="#fff">
        <use xlinkHref="#speaker-notes-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#speaker-notes-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpeakerNotesOff
