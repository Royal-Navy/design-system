import React, { SVGProps } from 'react'

const SvgTrackChanges = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="track-changes_svg__a"
        d="M12.713 3.287l-.94.94c.96.966 1.56 2.3 1.56 3.773A5.332 5.332 0 018 13.333a5.332 5.332 0 01-.667-10.62V4.06A3.998 3.998 0 004 8c0 2.207 1.793 4 4 4s4-1.793 4-4a3.963 3.963 0 00-1.173-2.827l-.94.94A2.666 2.666 0 115.334 8c0-1.24.853-2.273 2-2.573v1.426A1.32 1.32 0 006.666 8c0 .733.6 1.333 1.333 1.333S9.333 8.733 9.333 8c0-.493-.266-.92-.666-1.147v-5.52H8A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8c0-1.84-.747-3.507-1.954-4.713z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="track-changes_svg__b" fill="#fff">
        <use xlinkHref="#track-changes_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#track-changes_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTrackChanges
