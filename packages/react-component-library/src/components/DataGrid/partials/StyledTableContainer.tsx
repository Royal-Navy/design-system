import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

export const StyledTableContainer = styled.div`
  position: relative;
  overflow: auto;
  height:100%;
  border-bottom: 1px solid ${color('neutral', '200')};
  border-left: 1px solid ${color('neutral', '200')};
  border-right: 1px solid ${color('neutral', '200')};

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

`
