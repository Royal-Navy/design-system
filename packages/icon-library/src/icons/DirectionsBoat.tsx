import React, { SVGProps } from 'react'

const SvgDirectionsBoat = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="directions-boat_svg__a"
        d="M13.333 14c-.926 0-1.853-.313-2.666-.88a4.586 4.586 0 01-5.334 0c-.813.567-1.74.88-2.666.88H1.333v1.333h1.334c.92 0 1.826-.233 2.666-.66 1.68.86 3.654.86 5.334 0 .84.434 1.746.66 2.666.66h1.334V14h-1.334zm-10.7-1.333h.034c1.066 0 2.013-.587 2.666-1.334.654.747 1.6 1.334 2.667 1.334 1.067 0 2.013-.587 2.667-1.334.653.747 1.6 1.334 2.666 1.334h.034l1.26-4.454a.702.702 0 00-.04-.52.664.664 0 00-.4-.333l-.854-.28V4c0-.733-.6-1.333-1.333-1.333h-2v-2H6v2H4c-.733 0-1.333.6-1.333 1.333v3.08l-.86.28a.671.671 0 00-.44.853l1.266 4.454zM4 4h8v2.647L8 5.333 4 6.647V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="directions-boat_svg__b" fill="#fff">
        <use xlinkHref="#directions-boat_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#directions-boat_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDirectionsBoat
