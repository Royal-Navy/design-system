import React from 'react'

const IconAcUnit = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <polygon points="14.667 7.333 11.887 7.333 14.047 5.173 13.107 4.227 10 7.333 8.667 7.333 8.667 6 11.773 2.893 10.827 1.953 8.667 4.113 8.667 1.333 7.333 1.333 7.333 4.113 5.173 1.953 4.227 2.893 7.333 6 7.333 7.333 6 7.333 2.893 4.227 1.953 5.173 4.113 7.333 1.333 7.333 1.333 8.667 4.113 8.667 1.953 10.827 2.893 11.773 6 8.667 7.333 8.667 7.333 10 4.227 13.107 5.173 14.047 7.333 11.887 7.333 14.667 8.667 14.667 8.667 11.887 10.827 14.047 11.773 13.107 8.667 10 8.667 8.667 10 8.667 13.107 11.773 14.047 10.827 11.887 8.667 14.667 8.667" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="ac-unit-b" fill="#fff">
        <use xlinkHref="#ac-unit-a" />
      </mask>
      <g fill="CurrentColor" mask="url(#ac-unit-b)">
        <rect width="16" height="16" />
      </g>
    </g>
  </svg>
)

const RightContent = () => (
  <span>
    <IconAcUnit /> 5
  </span>
)

export default RightContent
