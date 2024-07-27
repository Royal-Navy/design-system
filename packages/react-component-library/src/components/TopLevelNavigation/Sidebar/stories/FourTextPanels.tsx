import React from 'react'

import styled from 'styled-components'

import { spacing, zIndex } from '@royalnavy/design-tokens'

import { LoremTextPanel } from './LoremTextPanel'
import { useSidebar } from '../context'
import { Button } from '../../../Button'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing('8')};
  justify-content: center;
  overflow: hidden;
`

const StyledHeading = styled.div`
  display: flex;
  padding: ${spacing('2')} ${spacing('2')} ${spacing('2')} 0;
  gap: ${spacing('8')};
  justify-content: space-between;
  overflow: hidden;
`

const StyledVisibleButton = styled(Button)`
  z-index: ${zIndex('sidebar', 1)};
`

export const FourTextPanels = () => {
  const { isOpen, setIsOpen } = useSidebar()!
  return (
    <>
      <StyledHeading>
        <h1>Heading text</h1>

        <StyledVisibleButton
          variant="primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {`${isOpen ? 'Close' : 'Open'} sidebar`}
        </StyledVisibleButton>
      </StyledHeading>
      <hr />
      <StyledWrapper>
        <LoremTextPanel />
        <LoremTextPanel />
        <LoremTextPanel />
      </StyledWrapper>
    </>
  )
}
