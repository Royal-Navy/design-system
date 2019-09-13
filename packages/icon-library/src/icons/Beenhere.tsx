import React, { SVGProps } from 'react'

const SvgBeenhere = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="beenhere_svg__a"
        d="M12.667.667H3.333c-.733 0-1.326.6-1.326 1.333L2 10.62c0 .46.233.867.587 1.107L8 15.333l5.407-3.606c.353-.24.586-.647.586-1.107L14 2c0-.733-.6-1.333-1.333-1.333zm-6 10L3.333 7.333l.94-.94L6.667 8.78l5.06-5.06.94.947-6 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="beenhere_svg__b" fill="#fff">
        <use xlinkHref="#beenhere_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#beenhere_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBeenhere
