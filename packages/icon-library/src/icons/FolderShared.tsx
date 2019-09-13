import React, { SVGProps } from 'react'

const SvgFolderShared = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="folder-shared_svg__a"
        d="M14.222 3.556H8.89L7.11 1.778H1.778c-.49 0-.89.4-.89.889v10.666c0 .49.4.89.89.89h12.444c.49 0 .89-.4.89-.89V4.444c0-.488-.4-.888-.89-.888zm-4 2.444c.862 0 1.556.693 1.556 1.556 0 .862-.694 1.555-1.556 1.555a1.552 1.552 0 01-1.555-1.555C8.667 6.693 9.36 6 10.222 6zm3.111 6.444H7.111v-1.11c0-1.04 2.071-1.556 3.111-1.556s3.111.515 3.111 1.555v1.111z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="folder-shared_svg__b" fill="#fff">
        <use xlinkHref="#folder-shared_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#folder-shared_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFolderShared
