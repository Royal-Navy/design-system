import React, { SVGProps } from 'react'

const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wallpaper_svg__a"
        d="M11.556 5.333c0-.489-.4-.889-.89-.889-.488 0-.888.4-.888.89 0 .488.4.888.889.888s.889-.4.889-.889zm-4.187 6.16L5.778 9.591l-2.222 2.853h8.888L9.591 8.631 7.37 11.493zM2.667 2.667H7.11V.889H2.667c-.978 0-1.778.8-1.778 1.778V7.11h1.778V2.667zm10.666 10.666H8.89v1.778h4.444c.978 0 1.778-.8 1.778-1.778V8.89h-1.778v4.444zM2.667 8.89H.889v4.444c0 .978.8 1.778 1.778 1.778H7.11v-1.778H2.667V8.89zm10.666-8H8.89v1.778h4.444V7.11h1.778V2.667c0-.978-.8-1.778-1.778-1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wallpaper_svg__b" fill="#fff">
        <use xlinkHref="#wallpaper_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wallpaper_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWallpaper
