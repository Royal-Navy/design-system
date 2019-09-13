import React, { SVGProps } from 'react'

const SvgExposurePlus2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="exposure-plus-2_svg__a"
        d="M10.7 10.86l1.907-2.047c.253-.26.48-.526.693-.786.213-.26.393-.52.547-.78.153-.26.273-.52.36-.78.086-.26.126-.527.126-.787 0-.353-.06-.68-.18-.973a1.96 1.96 0 00-.52-.74 2.398 2.398 0 00-.84-.474c-.34-.106-.72-.16-1.146-.16-.46 0-.874.074-1.234.214s-.666.34-.906.586a2.428 2.428 0 00-.56.867c-.12.313-.18.647-.187 1h1.427c.006-.207.033-.4.086-.58.06-.193.154-.36.267-.5.12-.14.273-.247.453-.327.18-.08.4-.12.64-.12.207 0 .387.034.54.1.154.067.287.167.394.287.106.12.186.267.246.433a1.762 1.762 0 01.034.974c-.04.146-.1.3-.194.466a4.04 4.04 0 01-.373.554 8.65 8.65 0 01-.587.686l-2.78 3.034V12h5.754v-1.14H10.7zM5.333 4.667H4v2.666H1.333v1.334H4v2.666h1.333V8.667H8V7.333H5.333V4.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="exposure-plus-2_svg__b" fill="#fff">
        <use xlinkHref="#exposure-plus-2_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#exposure-plus-2_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExposurePlus2
