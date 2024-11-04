import styled, { css } from 'styled-components'
import { color, fontSize, spacing } from '@royalnavy/design-tokens'

import { Button } from '../../Button'

export const StyledNMYContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
`

export const StyledButton = styled(Button)`
  margin-top: ${spacing('6')};
  height: 33px;
  border-radius: 10px;
`

export const StyledButtonArrows = styled(StyledButton)`
  margin: ${spacing('6')};
  max-width: 33px;
`

export const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  background-color: ${color('neutral', 'white')};
  width: 100%;
  height: 55px;
  border-radius: 15px;
  z-index: 1;
`

export const StyledCalendarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-color: ${color('neutral', 'white')};
  border-radius: 15px;
  z-index: 2;
`

export const StyledMonthsTitle = styled.div`
  flex: 1 1 auto;
  padding: 5px 0;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  text-align: center;
`

export const StyledYearsTitle = styled(StyledMonthsTitle)`
  padding: 20px 0;
`

export const StyledCalendarTable = styled.div<{
  $isMonths?: boolean
  $isYears?: boolean
}>`
  display: inline-grid;
  grid: repeat(4, 1fr) / repeat(3, auto);
  flex: auto;
  justify-content: center;
  grid-auto-flow: row;
  grid-gap: 1px;
  width: 100%;
  padding: ${spacing('4')} ${spacing('5')};
  border: 1px solid ${color('neutral', '000')};
  background-color: ${color('neutral', '000')};
  border-radius: 15px;

  ${({ $isYears }) =>
    $isYears &&
    css`
      padding-top: 55px;
    `}
`

export const StyledCalendarTiles = styled.div<{
  $isCurrent?: boolean
  $isSelected?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};
  text-align: center;
  background-color: ${color('neutral', 'white')};
  min-width: 80px;

  &:hover {
    background-color: ${color('neutral', '100')};
    color: ${color('neutral', '400')};
    cursor: pointer;
  }

  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      color: ${color('warning', '800')};
    `}

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${color('action', '700')};
      color: ${color('neutral', 'white')};
    `}
`
