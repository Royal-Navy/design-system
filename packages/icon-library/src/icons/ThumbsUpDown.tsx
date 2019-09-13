import React, { SVGProps } from 'react'

const SvgThumbsUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="thumbs-up-down_svg__a"
        d="M8 4c0-.367-.3-.667-.667-.667H3.88l.44-2.12.013-.153a.774.774 0 00-.22-.533L3.587 0 .293 3.293C.113 3.473 0 3.727 0 4v4.333c0 .554.447 1 1 1h4.5c.413 0 .767-.253.92-.606L7.927 5.2A.972.972 0 008 4.833V4zm7 2.667h-4.5c-.413 0-.767.253-.92.606L8.073 10.8a.972.972 0 00-.073.367V12c0 .367.3.667.667.667h3.453l-.44 2.12-.013.16c0 .206.086.393.22.533l.526.52 3.294-3.293c.18-.18.293-.434.293-.707V7.667c0-.554-.447-1-1-1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="thumbs-up-down_svg__b" fill="#fff">
        <use xlinkHref="#thumbs-up-down_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#thumbs-up-down_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgThumbsUpDown
