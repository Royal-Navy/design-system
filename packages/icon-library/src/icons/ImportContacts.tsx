import React, { SVGProps } from 'react'

const SvgImportContacts = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="import-contacts_svg__a"
        d="M14 3.333C13.26 3.1 12.447 3 11.667 3c-1.3 0-2.7.267-3.667 1-.967-.733-2.367-1-3.667-1-1.3 0-2.7.267-3.666 1v9.767c0 .166.166.333.333.333.067 0 .1-.033.167-.033.9-.434 2.2-.734 3.166-.734 1.3 0 2.7.267 3.667 1 .9-.566 2.533-1 3.667-1 1.1 0 2.233.2 3.166.7.067.034.1.034.167.034a.358.358 0 00.333-.334V4c-.4-.3-.833-.5-1.333-.667zm0 9C13.267 12.1 12.467 12 11.667 12 10.533 12 8.9 12.433 8 13V5.333c.9-.566 2.533-1 3.667-1 .8 0 1.6.1 2.333.334v7.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="import-contacts_svg__b" fill="#fff">
        <use xlinkHref="#import-contacts_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#import-contacts_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgImportContacts
