import React, { SVGProps } from 'react'

export const VisibilityOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="visibility-off_svg__a"
        d="M8 4.667A3.335 3.335 0 0111.333 8c0 .433-.086.84-.24 1.22l1.947 1.947A7.878 7.878 0 0015.327 8c-1.154-2.927-4-5-7.334-5-.933 0-1.826.167-2.653.467l1.44 1.44c.38-.154.787-.24 1.22-.24zm-6.667-1.82l1.52 1.52.307.306A7.87 7.87 0 00.667 8c1.153 2.927 4 5 7.333 5 1.033 0 2.02-.2 2.92-.56l.28.28 1.953 1.947.847-.847L2.18 2l-.847.847zM5.02 6.533l1.033 1.034A1.88 1.88 0 006 8c0 1.107.893 2 2 2 .147 0 .293-.02.433-.053l1.034 1.033c-.447.22-.94.353-1.467.353A3.335 3.335 0 014.667 8c0-.527.133-1.02.353-1.467zm2.873-.52l2.1 2.1.014-.106c0-1.107-.894-2-2-2l-.114.006z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="visibility-off_svg__b" fill="#fff">
        <use xlinkHref="#visibility-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#visibility-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)
