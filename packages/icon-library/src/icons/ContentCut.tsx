import React, { SVGProps } from 'react'

const SvgContentCut = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="content-cut_svg__a"
        d="M6.427 5.093c.153-.333.24-.7.24-1.093a2.666 2.666 0 10-5.334 0A2.666 2.666 0 004 6.667c.393 0 .76-.087 1.093-.24L6.667 8 5.093 9.573c-.333-.153-.7-.24-1.093-.24a2.666 2.666 0 100 5.334A2.666 2.666 0 006.667 12c0-.393-.087-.76-.24-1.093L8 9.333 12.667 14h2v-.667l-8.24-8.24zM4 5.333a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zm0 8a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zm4-5A.33.33 0 017.667 8 .33.33 0 018 7.667.33.33 0 018.333 8 .33.33 0 018 8.333zM12.667 2l-4 4L10 7.333l4.667-4.666V2h-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="content-cut_svg__b" fill="#fff">
        <use xlinkHref="#content-cut_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#content-cut_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgContentCut
