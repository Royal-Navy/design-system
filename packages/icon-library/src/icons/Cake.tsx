import React, { SVGProps } from 'react'

const SvgCake = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cake_svg__a"
        d="M8 4a1.333 1.333 0 001.14-2.02L8 0 6.86 1.98c-.127.2-.193.433-.193.687C6.667 3.4 7.267 4 8 4zm3.067 6.66l-.714-.713-.72.713c-.866.867-2.386.873-3.26 0l-.713-.713-.727.713a2.29 2.29 0 01-1.626.673c-.487 0-.934-.153-1.307-.406V14c0 .367.3.667.667.667h10.666c.367 0 .667-.3.667-.667v-3.073c-.373.253-.82.406-1.307.406a2.29 2.29 0 01-1.626-.673zM12 6H8.667V4.667H7.333V6H4c-1.107 0-2 .893-2 2v1.027c0 .72.587 1.306 1.307 1.306.346 0 .68-.133.92-.38l1.426-1.42 1.42 1.42c.494.494 1.354.494 1.847 0l1.427-1.42 1.42 1.42c.246.247.573.38.92.38.72 0 1.306-.586 1.306-1.306V8C14 6.893 13.107 6 12 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cake_svg__b" fill="#fff">
        <use xlinkHref="#cake_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cake_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCake
