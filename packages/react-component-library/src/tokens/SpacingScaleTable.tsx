import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { spacing, fontSize, color } = selectors

const StyledSwatch = styled.span<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'none'};
  border: solid 1px #ccc;
  min-width: 1.5rem;
  display: inline-block;
  min-height: 100%;
`

export const SpacingSwatch = ({
  backgroundColor,
}: {
  backgroundColor: string
}) => {
  return <StyledSwatch $backgroundColor={backgroundColor}>&nbsp;</StyledSwatch>
}

export const ExampleComponent = () => {
  /**  This is a contrived example to show individual usage
      Please don't write your code like this
  */
  const borderSize = spacing('4')
  const borderColor = color('action', '200')
  const paddingSize = spacing('8')
  const marginSize = spacing('2')

  return (
    <div
      style={{
        margin: marginSize,
        padding: paddingSize,
        border: `solid ${borderSize} ${borderColor}`,
      }}
    >
      <div style={{ fontSize: fontSize('xl') }}>Example component</div>
      <div>Padding: {paddingSize} </div>
      <div>Margin: {marginSize}</div>
      <div>
        Border: {borderSize} {borderColor}
      </div>
    </div>
  )
}
