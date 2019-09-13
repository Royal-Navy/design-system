import React, { SVGProps } from 'react'

const SvgRowing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rowing_svg__a"
        d="M5.667 9.667l-3 3 1 1L6 11.333h1.333L5.667 9.667zm4.333-9c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333S10.733.667 10 .667zm4 13.34L12 16l-1.993-2.007V13L5.273 8.273a3.777 3.777 0 01-.606.047V6.88c1.106.02 2.406-.58 3.113-1.36l.933-1.033a1.43 1.43 0 01.46-.334c.194-.093.414-.153.64-.153h.02c.827.007 1.5.68 1.5 1.507V9.34a2 2 0 01-.613 1.44L8.333 8.393V6.88c-.42.347-.953.68-1.526.927L11 12h1l2 2.007z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rowing_svg__b" fill="#fff">
        <use xlinkHref="#rowing_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rowing_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRowing
