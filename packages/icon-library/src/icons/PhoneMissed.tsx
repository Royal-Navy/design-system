import React, { SVGProps } from 'react'

const SvgPhoneMissed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phone-missed_svg__a"
        d="M4.16 3.84l3.52 3.52 4.48-4.48-.64-.64-3.84 3.84L4.8 3.2h2.24v-.96H3.2v3.84h.96V3.84zm11.014 7.149A10.862 10.862 0 007.68 8C4.774 8 2.138 9.14.186 10.989a.638.638 0 00-.186.454c0 .18.07.34.186.455l1.587 1.587a.638.638 0 00.454.185c.173 0 .333-.07.448-.179a7.308 7.308 0 011.703-1.184.638.638 0 00.358-.576V9.747A9.36 9.36 0 017.68 9.28c1.024 0 2.016.16 2.944.46v1.985c0 .25.147.473.358.576a7.544 7.544 0 011.71 1.184c.114.115.274.179.447.179.18 0 .34-.07.455-.186l1.587-1.587a.638.638 0 00.185-.454.628.628 0 00-.192-.448z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phone-missed_svg__b" fill="#fff">
        <use xlinkHref="#phone-missed_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phone-missed_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoneMissed
