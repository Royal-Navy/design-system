// @ts-ignore
import React from 'react'
import styled from 'styled-components'
import { selectors, Spacing } from '@royalnavy/design-tokens'

const { spacing, fontSize, color } = selectors

const keys = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  'full',
  'half',
  'px',
] as Spacing[]

const StyledTable = styled.div`
  padding: 0 ${spacing('8')};
  background-color: ${color('neutral', '100')};
`
const StyledRow = styled.div`
  border-bottom: solid 1px ${color('neutral', '000')};
  padding: ${spacing('4')} 0;
  line-height: ${fontSize('base')};
  div {
    font-size: ${fontSize('base')} !important;
  }
`

export const SpacingScaleTable = () => {
  return (
    <StyledTable>
      {keys.map((key) => (
        <StyledRow key={key}>
          <div
            style={{
              backgroundColor: '#FFF',
              border: `dotted 1px ${color('neutral', '300')}`,
              width: spacing(key),
              paddingTop: spacing('4'),
              paddingBottom: spacing('4'),
            }}
          >
            &nbsp;{key}:&nbsp;{spacing(key)}
          </div>
        </StyledRow>
      ))}
    </StyledTable>
  )
}

export const ExampleComponent = () => {
  /*  This is a contrived example to show individual usage
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