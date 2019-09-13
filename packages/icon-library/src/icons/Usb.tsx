import React, { SVGProps } from 'react'

const SvgUsb = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="usb_svg__a"
        d="M9.778 5.778v1.778h.444v1.333H8.444V4.444h1.334L8 1.778 6.222 4.444h1.334V8.89H5.778V7.52a.966.966 0 00.533-.853.975.975 0 00-.978-.978.975.975 0 00-.977.978c0 .373.222.693.533.853v1.369c0 .489.4.889.889.889h1.778v1.858a1.338 1.338 0 00-.89 1.253c0 .738.596 1.333 1.334 1.333.738 0 1.333-.595 1.333-1.333 0-.578-.373-1.067-.889-1.253V9.778h1.778c.49 0 .89-.4.89-.89V7.557h.444V5.778H9.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="usb_svg__b" fill="#fff">
        <use xlinkHref="#usb_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#usb_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgUsb
