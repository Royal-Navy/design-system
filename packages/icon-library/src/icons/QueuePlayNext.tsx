import React, { SVGProps } from 'react'

const SvgQueuePlayNext = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="queue-play-next_svg__a"
        d="M14 2H2C1.26 2 .667 2.593.667 3.333v8c0 .734.593 1.334 1.333 1.334h3.333V14h5.334v-1.333H12v-1.334H2v-8h12v5.334h1.333V3.333c0-.74-.6-1.333-1.333-1.333zM8.667 6.667v-2H7.333v2h-2V8h2v2h1.334V8h2V6.667h-2zM16 12l-3 3-1-1 2-2-2-2 1-1 3 3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="queue-play-next_svg__b" fill="#fff">
        <use xlinkHref="#queue-play-next_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#queue-play-next_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgQueuePlayNext
