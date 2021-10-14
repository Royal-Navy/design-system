import React from 'react'
import styled from 'styled-components'

import { Main } from '../../layouts'

const StyledHome = styled(Main)``

export const Home: React.FC<unknown> = () => (
  <StyledHome>
    <h1>Hello, World!</h1>
  </StyledHome>
)
