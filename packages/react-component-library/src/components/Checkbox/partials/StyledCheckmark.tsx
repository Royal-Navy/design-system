import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled  from 'styled-components'

const { color } = selectors

export const StyledCheckmark = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 18px;
  width: 18px;
  background-color: ${color('neutral', 'white')};
  border: 1px solid ${color('neutral', '200')};
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    display: none;

    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC44MjIgMGMxLjA1LS4wMjcgMS41NzQgMS4zMDQuODI3IDIuMDhMNC4yOTggNy43NGEuODMuODMgMCAwIDEtMS4yMDcgMEwuMzc2IDQuODU1Qy0uNzUyIDMuNzE4LjkxNCAxLjk1NiAxLjk5IDMuMTQ5bDEuNTA4IDEuNTk1Yy4xMDUuMTEuMjg4LjExLjQwNyAwbDQuMTMtNC4zN0ExLjEgMS4xIDAgMCAxIDguODIzIDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 1;
    font-size: 14px;
    color: ${color('neutral', 'white')};
    border-radius: 2px;
  }
`
