import styled from 'styled-components'
import { Slider, SliderProps } from 'react-compound-slider'

export const StyledSlider = styled<React.ComponentType<SliderProps>>(Slider)`
  position: relative;
  width: 100%;
  height: 40px;
  padding-top: 20px;
`
