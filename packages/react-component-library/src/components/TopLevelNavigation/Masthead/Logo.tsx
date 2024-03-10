import React from 'react'

import { ComponentWithClass } from '../../../common/ComponentWithClass'

export const Logo = ({ ...rest }: ComponentWithClass) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 105 110"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...rest}
    x="0px"
    y="0px"
  >
    <g>
      <polygon
        fill="#D9455F"
        points="85.9,96.2 72.1,110 17.2,55 34.8,37.4 48.5,51.1 44.7,55 	"
      />
      <rect
        x="60.1"
        y="5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 10.4294 54.6367)"
        className="st0"
        width="22.2"
        height="19.4"
        fill="#D9455F"
      />
      <g>
        <polygon
          fill="#233845"
          points="87.8,55 70.2,72.6 56.5,58.9 60.3,55 19.1,13.8 32.9,0 		"
        />

        <rect
          x="22.7"
          y="85.6"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -57.5201 51.7746)"
          fill="#233845"
          width="22.1"
          height="19.4"
        />
      </g>
    </g>
  </svg>
)

Logo.displayName = 'LogoIcon'
