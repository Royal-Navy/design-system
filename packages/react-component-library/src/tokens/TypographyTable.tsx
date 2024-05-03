import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'
import { getTypographySizes } from './utils'

const { fontSize, color, spacing } = selectors

const tokens = getTypographySizes()

const StyledRow = styled.div`
  border-bottom: solid 1px ${color('neutral', '000')};
  padding: ${spacing('2')} 0;
  height: ${fontSize('display-xl')};
  line-height: ${fontSize('display-xl')};
  display: flex;
  span {
    flex: 1;
  }
`

const StyledTable = styled.div`
  padding: 0 ${spacing('8')};
  background-color: ${color('neutral', '100')};
`

export const TypographyTable = () => {
  return (
    <StyledTable>
      {tokens.map((token) => (
        <StyledRow key={token}>
          <span style={{ fontSize: fontSize(token) }}>{token}</span>
          <span>{fontSize(token)}</span>
        </StyledRow>
      ))}
    </StyledTable>
  )
}
