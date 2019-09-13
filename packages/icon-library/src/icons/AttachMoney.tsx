import React, { SVGProps } from 'react'

const SvgAttachMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="attach-money_svg__a"
        d="M8.498 7.2c-1.422-.453-2.365-.631-2.365-1.671 0-.738.64-1.44 1.867-1.44 1.413 0 1.867.782 1.867 1.724h1.689c0-1.59-1.04-2.746-2.667-3.057V.889H7.11v1.875c-1.404.285-2.667 1.218-2.667 2.774 0 2 1.583 2.489 3.556 3.129 1.671.542 2 .924 2 1.857 0 .8-.596 1.387-2 1.387-1.067 0-2-.747-2-1.831H4.222c0 1.671 1.227 2.844 2.89 3.164v1.867h1.777v-1.84c1.813-.258 2.844-1.324 2.844-2.755 0-1.663-.835-2.552-3.235-3.316z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="attach-money_svg__b" fill="#fff">
        <use xlinkHref="#attach-money_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#attach-money_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAttachMoney
