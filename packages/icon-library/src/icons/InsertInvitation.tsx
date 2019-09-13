import React, { SVGProps } from 'react'

const SvgInsertInvitation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="insert-invitation_svg__a"
        d="M11.556 8H8v3.556h3.556V8zm2.666-6.222h-.889V0h-1.777v1.778H4.444V0H2.667v1.778h-.89c-.488 0-.888.4-.888.889v11.555c0 .49.4.89.889.89h12.444c.49 0 .89-.4.89-.89V2.667c0-.49-.4-.89-.89-.89zm-.889 11.555H2.667v-8h10.666v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="insert-invitation_svg__b" fill="#fff">
        <use xlinkHref="#insert-invitation_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#insert-invitation_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInsertInvitation
