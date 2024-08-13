import styled from 'styled-components'

interface StyledRightKnobProps {
  $isChecked: boolean
}

export const StyledRightKnob = styled.div<StyledRightKnobProps>`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  right: 6px;
`
